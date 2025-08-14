import './App.css'
import Todos from "./components/Todo.tsx";
import Todo from "./models/todo.ts";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ];
  return (
    <>
      <Todos items={todos} />
    </>
  )
}

export default App
