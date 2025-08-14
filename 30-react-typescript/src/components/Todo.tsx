import React from "react";
import type Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";

type TodoProps = {
  items: Todo[];
};

// React.FC = React.FunctionComponent
const Todos: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => <TodoItem key={item.id + i} content={item.text} />)}
    </ul>
  );
}

export default Todos;