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

export async function loader() {
  try {
    const resourceUrl = 'http://localhost:8080/events';
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      const data = await resp.json();
      return {
        events: data.events,
        error: undefined,
      };
    }
  } catch (e) {
    console.error(e);
    return {
      events: [],
      error: 'failed to fetch events',
    };
  }
}

export default EventsPage;