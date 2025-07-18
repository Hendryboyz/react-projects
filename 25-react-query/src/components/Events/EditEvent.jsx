import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const {id: eventId} = useParams();
  const navigate = useNavigate();

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', eventId],
    queryFn: ({signal}) => fetchEvent({id: eventId, signal}),
  });

  const eventCachedKey = ['events', eventId];
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    // will be called before the mutation happened
    onMutate: async (data) => {
      const {event: newEvent} = data;
      // optimistic update
      await queryClient.cancelQueries({queryKey: eventCachedKey})
      const prevEvent = queryClient.getQueryData(eventCachedKey);
      queryClient.setQueryData(eventCachedKey, newEvent);
      return { prevEvent };
    },
    onError: (error, data, context) => {
      console.log(error);
      const {prevEvent} = context;
      queryClient.setQueryData(eventCachedKey, prevEvent);
    },
    // will be invoked no matter the mutation is success or failed
    onSettled: async () => {
      await queryClient.invalidateQueries(eventCachedKey);
    },
    // onSuccess: () => {},
  })

  function handleSubmit(formData) {
    const payload = {...formData};
    mutate({id: eventId, event: payload});
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  function handleUpdateEvent() {

  }

  let content = undefined;

  if (isPending) {
    content = (
      <div className={"center"}><LoadingIndicator /></div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title="Failed to load event" message={error.info?.message ||
          "Failed to load event, Please check your inputs and try again later."} />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content =(
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
