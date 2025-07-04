import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router-dom";
import {fetchContents} from "../utils";

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

export async function loader({request, params}) {
  // can not use React hook in loader but allow any browser api
  const resourceUrl = 'http://localhost:8080/events';
  return await fetchContents(resourceUrl);
}

export default EventsPage;