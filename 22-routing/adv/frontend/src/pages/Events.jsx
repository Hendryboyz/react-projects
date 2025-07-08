import EventsList from "../components/EventsList";
import {Await, useLoaderData} from "react-router-dom";
import {fetchContents} from "../utils";
import {Suspense} from "react";

function EventsPage() {
  // const [loading, setLoading] = useState(false);
  // const [events, setEvents] = useState([]);
  // const [error, setError] = useState(undefined);
  const {events} = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  // return (
  //   <>
  //     {data.events && <EventsList events={data.events}/>}
  //   </>
  // );
  return (
    <Suspense fallback={
      <p style={{ textAlign: 'center' }}>Loading...</p>
    }>
      <Await resolve={events}>
        {(loadedEvents) => (
          <EventsList events={loadedEvents} />
        )}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const resourceUrl = 'http://localhost:8080/events';
  return await fetchContents(resourceUrl, 'fail to fetch events');
}

export function loader({request, params}) {
  // can not use React hook in loader but allow any browser api
  // react router dom will deprecate defer() in React Router v7
  // return defer({
  //   events: loadEvents(),
  // });
  return {
    events: loadEvents(),
  };
}

export default EventsPage;