import React, { useState } from "react";
function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");
  const addTask = () => {
    if (text === "") return;
    setTask([...tasks, { name: text, completed: false }]);
    setText("");
  };
  const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={text}
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={tasks.completed} />
            <span className={tasks.completed ? "done" : ""}>{task.name}</span>
            <button onClick={() => deleteTask(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
