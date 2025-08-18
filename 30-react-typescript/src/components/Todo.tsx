import React, {useContext} from "react";
import TodoItem from "./TodoItem.tsx";
import classes from "./Todos.module.css";
import {TodoContext} from "../store/TodoContext.tsx";

// React.FC = React.FunctionComponent
const Todos: React.FC = () => {
  const {removeTodo, todos: items} = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {items.map((item, i) =>
        <TodoItem key={item.id + i} content={item.text} onFinishItem={removeTodo.bind(null, item.text)} />)}
    </ul>
  );
}

export default Todos;