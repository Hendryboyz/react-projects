import {useRef} from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function({ onCancelNewProject, onCreateNewProject }) {
  const title = useRef(undefined);
  const description = useRef(undefined);
  const dueDate = useRef(undefined);
  return (
    <form className="w-[35rem] mt-16" onSubmit={() => {
      onCreateNewProject(
        title.current.value,
        description.current.value,
        dueDate.current.value,
      );
    }}>
      <menu className="flex justify-end items-center my-4 gap-4">
        <Button onClick={onCancelNewProject} customClass="text-stone-800 hover:text-stone-950">Cancel</Button>
        <Button customClass="bg-stone-800 text-stone-50 hover:bg-stone-950">Save</Button>
      </menu>
      <div>
        <Input label="Title" type="text" id="title" ref={title} />
        <Input label="Description" type="textarea" id="description" ref={description} />
        <Input label="Due Date" type="date" id="due-date" ref={dueDate} />
      </div>
    </form>
  )
}