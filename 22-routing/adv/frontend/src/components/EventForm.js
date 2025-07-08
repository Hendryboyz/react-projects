import {Form, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';

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
  const navigation = useNavigation();
  const actionData = useActionData();

  const isSubmitting = navigation.state === 'submitting';

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
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
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
        <button disabled={isSubmitting}>{ isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export async function action({request, params}) {
  const formData = await request.formData();
  const payload = {
    title: formData.get('title'),
    description: formData.get('description'),
    date: formData.get('date'),
    image: formData.get('image'),
  };
  let resourceUrl = 'http://localhost:8080/events';
  const actionMethod = request.method.toUpperCase();
  if (actionMethod === 'PATCH') {
    const eventId = params.eventId;
    resourceUrl += `/${eventId}`;
  }
  const resp = await fetch(resourceUrl, {
    method: actionMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (resp.status === 422) {
    return resp;
  }

  if (!resp.ok) {
    throw Response.json('could not save event.', { status: 500 });
  }

  return redirect('/events' );
}


export default EventForm;
