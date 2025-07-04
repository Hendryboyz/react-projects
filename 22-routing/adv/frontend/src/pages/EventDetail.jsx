import {useRouteLoaderData} from "react-router-dom";
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
  return await fetchContents(resourceUrl);
}

export default EventDetailPage;