//File: src / App.jsx;
import { useState } from "react";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  // Convert input to numbers safely
  const a = Number(num1);
  const b = Number(num2);
  return (
    <div>
      <h1>Real-Time Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <h2>Results</h2>
        <p>
          <strong>Addition:</strong> {a + b}
        </p>
        <p>
          <strong>Subtraction:</strong> {a - b}
        </p>
        <p>
          <strong>Multiplication:</strong> {a * b}
        </p>
        <p>
          <strong>Division:</strong> {b === 0 ? "Cannot divide by zero" : a / b}
        </p>
      </div>
    </div>
  );
}
export default App;
