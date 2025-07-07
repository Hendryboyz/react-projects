import {Form, useNavigate} from 'react-router-dom';

import classes from './EventForm.module.css';
// import {useActionState} from "react";

const INITIAL_EVENT = {
  title: '',
  description: '',
  date: new Date(),
  image: null,
};

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..', { relative: 'path' });
  }

  // function submitEventHandler(prevState, formData) {
  //   console.log(prevState);
  //   console.log(formData.values());
  // }
  //
  // const [state, formAction] = useActionState(
  //   submitEventHandler,
  //   event || INITIAL_EVENT,
  //   undefined
  // );

  return (
    <Form className={classes.form} method={method}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title || INITIAL_EVENT.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event?.image || INITIAL_EVENT.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event?.date || INITIAL_EVENT.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event?.description || INITIAL_EVENT.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
