//File: src / App.jsx;
import { useState } from "react";
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#111827",
  };
  const darkTheme = {
    backgroundColor: "#0f172a",
    color: "#e6eef8",
  };
  const currentTheme = isDark ? darkTheme : lightTheme;
  return (
    <div style={{ ...currentTheme }}>
      <div>
        <h1>Theme Toggle Example</h1>
        <p>Click the button to switch between Light and Dark mode.</p>
        <button onClick={() => setIsDark((s) => !s)}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <div style={{ ...currentTheme }}>
          <h2>Preview Area</h2>
          <p>
            This text and the page background change according to the selected
            theme.
          </p>
        </div>
      </div>
    </div>
  );
}
          
