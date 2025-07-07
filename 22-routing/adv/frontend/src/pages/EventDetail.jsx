import {redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import {fetchContents} from "../utils";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  const {event} = data;
  return (
    <>
      <h2>event {event.id} detail</h2>
      <EventItem event={event} />
    </>
  );
}

export async function loader({request, params}) {
  const {eventId} = params;
  const resourceUrl = `http://localhost:8080/events/${eventId}`;
  return await fetchContents(resourceUrl, `fail to fetch event id: ${eventId}`);
}

export async function action({request, params}) {
  const {eventId} = params;
  const resourceUrl = `http://localhost:8080/events/${eventId}`;
  const resp = await fetch(resourceUrl, {
    method: request.method,
  })
  if (!resp.ok) {
    throw Response.json({message: 'could not delete event.'}, { status: 500 })
  }
  return redirect('/events');
}

export default EventDetailPage;