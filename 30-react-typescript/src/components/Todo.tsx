import React from "react";
import type Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from "./Todos.module.css";

type TodoProps = {
  items: Todo[];
  onFinishItem: (removeItemContent: string) => void;
};

// React.FC = React.FunctionComponent
const Todos: React.FC<TodoProps> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item, i) =>
        <TodoItem key={item.id + i} content={item.text} onFinishItem={props.onFinishItem} />)}
    </ul>
  );
}

export default Todos;