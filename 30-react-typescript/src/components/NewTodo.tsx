import React, {useRef} from "react";
import classes from './NewTodo.module.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoText = useRef<HTMLInputElement>(null);
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!todoText.current) {
      return;
    }

    // !(exclamation mark) means the null value is impossible
    const enteredText = todoText.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
    todoText.current!.value = '';
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoText} />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;