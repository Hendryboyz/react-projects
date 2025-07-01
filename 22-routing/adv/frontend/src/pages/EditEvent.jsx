import {useParams} from "react-router-dom";

function EditEventPage() {
  const params = useParams();
  return (
    <>
      <div>try to edit event {params.eventId}</div>
    </>
  );
}

export default EditEventPage;