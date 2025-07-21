import {Link, redirect, useNavigate, useNavigation, useParams, useSubmit} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const {id: eventId} = useParams();
  const navigate = useNavigate();
  const {state} = useNavigation();
  const submit = useSubmit();

  // useQuery() get the cached data fetched from React router loader
  const {data, isError, error} = useQuery({
    queryKey: ['events', eventId],
    queryFn: ({signal}) => fetchEvent({id: eventId, signal}),
    // make sure the cached is used if the data is less than `staleTime` milliseconds old
    staleTime: 10000,
  });

  const eventCachedKey = ['events', eventId];

  useMutation({
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
    // const payload = {...formData};
    // mutate({id: eventId, event: payload});
    // navigate('../');
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content = undefined;

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
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({params}) {
  const {id: eventId} = params;
  return queryClient.fetchQuery({
    queryKey: ['events', eventId],
    queryFn: ({signal}) => fetchEvent({id: eventId, signal}),
  })
}

export async function action({request, params}) {
  const {id: eventId} = params;
  const formData = await request.formData();
  const updatingEventData = Object.fromEntries(formData);
  await updateEvent({id: eventId, event: updatingEventData});
  await queryClient.invalidateQueries(['events', eventId]);
  return redirect('../');
}