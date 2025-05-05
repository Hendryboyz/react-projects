import {useRef} from "react";
import {object, string, date} from 'yup';
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const projectSchema = object({
  title: string().required().max(64),
  description: string().required().max(250),
  dueDate: date().required(),
});

export default function({ onCancelNewProject, onCreateNewProject }) {
  const title = useRef(undefined);
  const description = useRef(undefined);
  const dueDate = useRef(undefined);
  const errorModal = useRef(undefined);

  const onProjectSave = () => {
    const newProject = {
      title: title.current?.value,
      description: description.current?.value,
      dueDate: dueDate.current?.value,
    };

    if (!projectSchema.isValidSync(newProject, {})) {
      errorModal.current?.open();
      return;
    }

    onCreateNewProject(newProject);
  };

  return (
    <>
      <Modal ref={errorModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-red-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure your provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center my-4 gap-4">
          <Button onClick={onCancelNewProject} customClass="text-stone-800 hover:text-stone-950">Cancel</Button>
          <Button onClick={onProjectSave} customClass="bg-stone-800 text-stone-50 hover:bg-stone-950">Save</Button>
        </menu>
        <div>
          <Input label="Title" type="text" id="title" ref={title}/>
          <Input label="Description" type="textarea" id="description" ref={description}/>
          <Input label="Due Date" type="date" id="due-date" ref={dueDate}/>
        </div>
      </div>
    </>
  )
}