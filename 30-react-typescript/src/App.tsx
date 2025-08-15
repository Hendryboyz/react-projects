import {useState} from "react";
import './App.css'
import Todos from "./components/Todo.tsx";
import Todo from "./models/todo.ts";
import NewTodo from "./components/NewTodo.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]);

  function addTodoHandler(todoContent: string) {
    setTodos((prevTodos) => {
      return [...prevTodos, new Todo(todoContent)];
    })
  }
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  )
}

export default App
