import {useQuery} from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {fetchEvents} from "../../utils/http.js";

export default function NewEventsSection() {
  const { data, isPending, isError, error} = useQuery({
    queryKey: ['events', { limit: 3 }],
    queryFn: ({signal, queryKey}) => fetchEvents({signal, ...queryKey[1]}),
    staleTime: 0, // wait `staleTime` milliseconds to query behind the scene
    // garbage collection time determine how long the cache would be kept around
    // gcTime: Infinity,
  });

  let content = undefined;
  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
