import {useParams} from "react-router-dom";
import EventForm from "../components/EventForm";
import {DUMMY_EVENTS} from "../events";

function EditEventPage() {
  const params = useParams();
  const {eventId} = params;
  const event = DUMMY_EVENTS.find(e => e.id === eventId);
  return (
    <>
      <div>try to edit event {eventId}</div>
      <EventForm event={event} method='PUT' />
    </>
  );
}

export default EditEventPage;