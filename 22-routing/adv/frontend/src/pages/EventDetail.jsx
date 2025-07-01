import {useParams} from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <div>this is event {params.eventId} detail page</div>
    </>
  );
}

export default EventDetailPage;