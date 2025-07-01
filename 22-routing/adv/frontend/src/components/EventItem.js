import classes from './EventItem.module.css';
import {Link} from "react-router-dom";
import {dateFormater} from "../utils";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{dateFormater.format(event.date)}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`../${event.id}/edit`} relative>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
