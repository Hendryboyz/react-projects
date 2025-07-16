import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, getImageUrl, queryClient} from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const {id: eventId} = useParams();
  const {
    data: event,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ['event', eventId],
    queryFn: ({signal}) => fetchEvent({id: eventId, signal})
  });

  const navigate = useNavigate();
  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['events'],
        exact: true,
      });
      navigate('/events');
    },
  });
  async function handleDelete() {
    console.log(`try to delete event ${eventId}`)
    mutate({id: eventId});
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isError && <ErrorBlock title={`Fail to fetch event ${eventId}`} message={error.info?.message} /> }
      {/*{isPending && <p>Loading event {eventId}...</p>}*/}
      {event && (
        <article id="event-details">
          <header>
            <h1>{event.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={getImageUrl(event.image)} alt={event.image}/>
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{event.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{event.date} @ {event.time}</time>
              </div>
              <p id="event-details-description">{event.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
