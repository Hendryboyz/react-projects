import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, getImageUrl, queryClient} from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const {id: eventId} = useParams();
  const {
    data: event,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ['events', eventId],
    queryFn: ({signal}) => fetchEvent({id: eventId, signal})
  });

  const navigate = useNavigate();

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['events'],
        exact: true,
        // to avoid deleted query being queried again
        refetchType: 'none', // the existing queries will not automatically be triggered again immediately
      });
      setIsDeleting(false);
      navigate('/events');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  async function handleDelete() {
    console.log(`try to delete event ${eventId}`);

    mutate({id: eventId});
  }

  let content = undefined;
  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event {eventId} data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title={`Fail to fetch event ${eventId}`}
          message={
            error.info?.message ||
            `Failed to fetch event ${eventId} data, please try again later`
          }/>
      </div>
    );
  }

  if (event) {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    content = (
      <>
        <header>
          <h1>{event?.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={getImageUrl(event.image)} alt={event.image}/>
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{event.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {event.time}</time>
            </div>
            <p id="event-details-description">{event.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you suer?</h2>
          <p>Do you really want to delete this event? This action can not be undone.</p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button onClick={handleStopDelete} className="button-text">Cancel</button>
                <button
                  onClick={handleDelete}
                  className="button"
                >
                  Delete
                </button>
              </>
            )}
          </div>
          {isErrorDeleting &&
            <ErrorBlock title="Failed to delete event" message={deleteError.info?.message || "Failed to delete event, please try again later."}  />}
        </Modal>)
      }
      <Outlet/>
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
