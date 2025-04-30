import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function({ onCancelNewProject }) {
  return (
    <form className="pl-36" onSubmit={() => {
      onCancelNewProject();
    }}>
      <div className="w-3/5 flex justify-end">
        <Button onClick={onCancelNewProject}>Cancel</Button>
        <Button customClass="bg-gray-800 text-white">Save</Button>
      </div>
      <Input label="Title" type="text" id="title" />
      <Input label="Description" type="textarea" id="description" />
      <Input label="Due Date" type="date" id="due-date" />
    </form>
  )
}