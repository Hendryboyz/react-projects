import {QueryClient} from "@tanstack/react-query";

const BACKEND_FQDN = 'http://localhost:3000/';

export const getImageUrl = (path) => BACKEND_FQDN + path;

export const queryClient = new QueryClient();

export async function fetchEvents({signal, searchTerm, limit}) {
  let resourceUrl = BACKEND_FQDN + 'events';
  const queries = [];
  if (searchTerm) {
    queries.push(`search=${searchTerm}`);
  }
  if (limit) {
    queries.push(`max=${limit}`);
  }
  if (queries.length > 0) {
    resourceUrl += '?' + queries.join('&');
  }
  const response = await fetch(resourceUrl, {signal: signal});

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function createNewEvent(eventData) {
  let resourceUrl = BACKEND_FQDN + 'events';
  const response = await fetch(resourceUrl, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {event} = await response.json();
  return event;
}

export async function fetchSelectableImages({ signal }) {
  const response = await fetch(`${BACKEND_FQDN}events/images`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  return images;
}

export async function fetchEvent({ id, signal }) {
  const response = await fetch(`${BACKEND_FQDN}events/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function deleteEvent({ id }) {
  const response = await fetch(`${BACKEND_FQDN}events/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function updateEvent({ id, event }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
