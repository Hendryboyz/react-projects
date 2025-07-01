import {Link} from "react-router-dom";

function NewEventPage() {
  return (
    <>
      <p>Add a new event</p>
      <Link to='..'>Cancel</Link>
    </>
  );
}

export default NewEventPage;