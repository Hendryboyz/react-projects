import EventsList from "../components/EventsList";
import {DUMMY_EVENTS} from "../events";

function EventsPage() {
  return (
    <>
      <div>this is the event page</div>
      <EventsList events={DUMMY_EVENTS}/>
    </>
  );
}

export default EventsPage;