import classes from './TodoItem.module.css';
type TodoItemProps  = {
  content: string;
  onFinishItem: (removeItemContent: string) => void;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <li 
      className={classes.item}
      onClick={() => { props.onFinishItem(props.content); }}
    >{props.content}</li>
  );
}