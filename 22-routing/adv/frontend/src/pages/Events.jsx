import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router-dom";

function EventsPage() {
  // const [loading, setLoading] = useState(false);
  // const [events, setEvents] = useState([]);
  // const [error, setError] = useState(undefined);
  const data = useLoaderData();

  return (
    <>
      {data.events && <EventsList events={data.events}/>}
    </>
  );
}

export default EventsPage;