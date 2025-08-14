type TodoItemProps  = {
  content: string;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <li>{props.content}</li>
  );
}