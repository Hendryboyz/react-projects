import {Await, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import {fetchContents} from "../utils";
import {loadEvents} from "../utils";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  const {event, eventList} = data;
  return (
    <>
      <h2>event {event.id} detail</h2>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => (<EventItem event={loadedEvent}/>)}
        </Await>
      </Suspense>
      <hr style={{ margin: '0px 60px' }} />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={eventList}>
          {loadedEvents => {
            console.log(loadedEvents);
            return <EventsList events={loadedEvents} showTitle={false}/>
          }}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(eventId) {
  const resourceUrl = `http://localhost:8080/events/${eventId}`;
  const responseData = await fetchContents(resourceUrl, `fail to fetch event id: ${eventId}`);
  return responseData.event;
}

export async function loader({request, params}) {
  const {eventId} = params;
  return {
    event: await loadEvent(eventId), // make sure single event loaded before navigation to this page
    eventList: loadEvents(),
  };
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