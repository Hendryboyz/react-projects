import React, {createContext, useState} from "react";
import Todo from "../models/todo.ts";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todoContent: string) => void,
  removeTodo: (todoContent: string) => void,
};

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (todoContent: string) => {},
  removeTodo: (todoContent: string) => {},
})

const TodoContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]);

  function addTodoHandler(todoContent: string) {
    setTodos((prevTodos) => {
      return [...prevTodos, new Todo(todoContent)];
    })
  }

  function removeTodoHandler(todoContent: string) {
    setTodos((prevTodos) =>
      prevTodos.filter(todo => todo.text !== todoContent));
  }

  const contextValue: TodoContextType = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;