import {useParams} from "react-router-dom";
import EventItem from "../components/EventItem";
import {DUMMY_EVENTS} from "../events";

function EventDetailPage() {
  const params = useParams();
  const {eventId} = params;
  const event = DUMMY_EVENTS.find(e => e.id === eventId);
  return (
    <>
      <div>this is event {eventId} detail page</div>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;