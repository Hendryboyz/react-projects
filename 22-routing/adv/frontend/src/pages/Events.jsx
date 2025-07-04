import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router-dom";

function EventsPage() {
  // const [loading, setLoading] = useState(false);
  // const [events, setEvents] = useState([]);
  // const [error, setError] = useState(undefined);
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>
  }

  return (
    <>
      {data.events && <EventsList events={data.events}/>}
    </>
  );
}

export async function loader({request}) {
  // can not use React hook in loader but allow any browser api
  try {
    const resourceUrl = 'http://localhost:8080/events';
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      return resp;
    } else {
      throw Response.json({message: 'failed to fetch events'}, { status: 500 })
    }
  } catch (e) {
    console.error(e);
    throw Response.json({message: 'failed to fetch events'}, { status: 500 })
  }
}

export default EventsPage;