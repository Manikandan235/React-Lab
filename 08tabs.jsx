//File: src / App.jsx;
import { useState } from "react";
function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div>
      <h2>Tab Navigation Example</h2>
      <div>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>
      <div>
        {activeTab === "home" && (
          <p>Welcome to the Home tab! This is the homepage content.</p>
        )}
        {activeTab === "about" && (
          <p>About Us: We are learning React conditional rendering and tabs.</p>
        )}
        {activeTab === "contact" && <p>Contact Us at: contact@example.com</p>}
      </div>
    </div>
  );
}
export default App;
