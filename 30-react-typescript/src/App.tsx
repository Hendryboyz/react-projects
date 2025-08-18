import './App.css'
import Todos from "./components/Todo.tsx";
import NewTodo from "./components/NewTodo.tsx";
import TodoContextProvider from "./store/TodoContext.tsx";

function App() {

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  )
}

export default App
