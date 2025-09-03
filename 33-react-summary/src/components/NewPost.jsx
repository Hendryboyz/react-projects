import {useRef} from "react";
import styles from './new-post.module.css'

function NewPost({onPostSubmit}) {
  const nameRef = useRef(null);
  const bodyRef = useRef(null);

  function postSubmitHandler(e) {
    e.preventDefault();
    if (!nameRef.current || !bodyRef.current) return;

    onPostSubmit(nameRef.current.value, bodyRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={postSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} ref={bodyRef} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input required type="text" id="name" ref={nameRef} />
      </p>
      <p className={styles.actions}>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
