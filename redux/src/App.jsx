import "./App.css";
import Calculator from "./features/calculator/calculator";
import { Counter } from "./features/counter/counter";
import Todo from "./features/todo/todo";

function App() {
  return (
    <>
      <Counter />
      <Todo />
      <Calculator />
    </>
  );
}

export default App;
