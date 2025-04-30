import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function({ onCancelNewProject }) {
  return (
    <>
      <div className="w-3/5 flex justify-end">
        <Button onClick={onCancelNewProject}>Cancel</Button>
        <Button customClass="bg-gray-800 text-white">Save</Button>
      </div>
      <Input label="Title" type="text" />
      <Input label="Description" type="textarea" />
      <Input label="Due Date" type="date" />
    </>
  )
}