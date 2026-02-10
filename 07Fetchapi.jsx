//File:App.jsx
import { useEffect, useState } from 'react'

const App = () => {
    const [userData,setUserData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => setUserData(json))
    },[])
    return (
        <div>
            <h1>UserData-Fetch API</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) =>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
