import {Link, redirect} from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <>
      <EventForm method="post" />
    </>
  );
}

export async function action({request, params}) {
  const formData = await request.formData()
  const payload = {
    title: formData.get('title'),
    description: formData.get('description'),
    date: formData.get('date'),
    image: formData.get('image'),
  };
  const resourceUrl = 'http://localhost:8080/events';
  const resp = await fetch(resourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    throw Response.json('could not save event.', { status: 500 });
  }

  return redirect('/events' );
}

export default NewEventPage;