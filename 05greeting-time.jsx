//File: src / App.jsx;
import { useState, useEffect } from "react";
function App() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hour = new Date().getHours().toString().padStart(2, "0");
    const min = new Date().getMinutes().toString().padStart(2, "0");
    const secs = new Date().getSeconds().toString().padStart(2, "0");
    if (hour < 12) {
      setGreeting(`Good Morning<br/>${hour}:${min}:${secs}`);
    } else if (hour >= 12 && hour < 17) {
      setGreeting(`Good Afternoon<br/>${hour}:${min}:${secs}`);
    } else if (hour >= 17 && hour < 20) {
      setGreeting(`Good Evening<br/>${hour}:${min}:${secs}`);
    } else {
      setGreeting(`Good Night<br/>${hour}:${min}:${secs}`);
    }
  }, []);
  return (
    <div>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: greeting }}></h1>
        <p>
          This greeting updates based on your system time.
        </p>
      </div>
    </div>
  );
}
export default App;
