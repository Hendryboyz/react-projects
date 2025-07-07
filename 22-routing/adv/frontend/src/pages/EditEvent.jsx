import {useRouteLoaderData} from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  const {event} = data;
  return (
    <>
      <div>Edit event {event.id}</div>
      <EventForm event={event} method='put' />
    </>
  );
}

export default EditEventPage;