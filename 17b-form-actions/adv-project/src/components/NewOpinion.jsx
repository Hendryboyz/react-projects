import { useActionState } from 'react';
import {optionFormSchema} from "../utils/validation.js";

function handleOpinionSubmit(prevFormState, formState) {
  const formData = {
    userName: formState.get('userName'),
    title: formState.get('title'),
    body: formState.get('body'),
  };

  const parsedFormData = optionFormSchema.safeParse(formData);

  const errors = [];

  if (!parsedFormData.success) {
    for (const issue of parsedFormData.error.issues) {
      errors.push(issue.message);
    }
    return { errors };
  } else {
    return { errors: null };
  }
}

export function NewOpinion() {
  const [
    formState,
    formAction,
    pending,
  ] = useActionState(handleOpinionSubmit, {});

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
