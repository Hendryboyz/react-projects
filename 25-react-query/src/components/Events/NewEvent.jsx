import { Link, useNavigate } from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {createNewEvent, queryClient} from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['events'],
        exact: true,
      });
      navigate('/events');
    },
  });

  function handleSubmit(formData) {
    const payload = { event: formData };
    mutate(payload);
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError &&
        <ErrorBlock
          title="Failed to create event"
          message={error.info?.message || 'Failed to create event. Please check your inputs and try later.'}
        />
      }
    </Modal>
  );
}
