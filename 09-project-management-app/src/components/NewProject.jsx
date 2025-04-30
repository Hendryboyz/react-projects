import {useRef} from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function({ onCancelNewProject, onCreateNewProject }) {
  const title = useRef(undefined);
  const description = useRef(undefined);
  const dueDate = useRef(undefined);
  return (
    <form className="pl-36" onSubmit={() => {
      onCreateNewProject(
        title.current.value,
        description.current.value,
        dueDate.current.value,
      );
    }}>
      <div className="w-3/5 flex justify-end">
        <Button onClick={onCancelNewProject}>Cancel</Button>
        <Button customClass="bg-gray-800 text-white">Save</Button>
      </div>
      <Input label="Title" type="text" id="title" ref={title} />
      <Input label="Description" type="textarea" id="description" ref={description} />
      <Input label="Due Date" type="date" id="due-date" ref={dueDate} />
    </form>
  )
}