import EventsList from "../components/EventsList";
import {DUMMY_EVENTS} from "../events";

function EventsPage() {
  return (
    <>
      <EventsList events={DUMMY_EVENTS}/>
    </>
  );
}

export default EventsPage;