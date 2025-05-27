import {useActionState, useContext} from 'react';
import {optionFormSchema} from "../utils/validation.js";
import {OpinionsContext} from "../store/opinions-context.jsx";


export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  async function handleOpinionSubmit(prevFormState, formState) {
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
      return { errors, enteredValue: formData };
    } else {
      await addOpinion(formData);
      return { errors: null };
    }
  }

  // pending will be `true` if form is submitting
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
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValue?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValue?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValue?.body}></textarea>
        </p>

        {formState.errors && <ul className="errors">
          {formState.errors.map((error) => (
            <li key={Math.random()}>{error}</li>
          ))}
        </ul>}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
