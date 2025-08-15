import classes from './TodoItem.module.css';
type TodoItemProps  = {
  content: string;
  onFinishItem: () => void;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <li 
      className={classes.item}
      onClick={props.onFinishItem}
    >{props.content}</li>
  );
}