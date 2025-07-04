import EventsList from "../components/EventsList";
import {json, useLoaderData} from "react-router-dom";

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

export async function loader() {
  // can not use React hook in loader but allow any browser api
  try {
    const resourceUrl = 'http://localhost:8080/events';
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      return resp;
    } else {
      // throw new Response(
      //   JSON.stringify({
      //     isError: true,
      //     message: 'failed to fetch events'
      //   }),
      //   {
      //     status: 500,
      //   },
      // );
      throw json({message: 'failed to fetch events'}, { status: 500 })
    }
  } catch (e) {
    console.error(e);
    // throw new Response(
    //   JSON.stringify({
    //     isError: true,
    //     message: 'failed to fetch events'
    //   }),
    //   {
    //     status: 500,
    //   },
    // );
    throw json({message: 'failed to fetch events'}, { status: 500 })
  }
}

export default EventsPage;