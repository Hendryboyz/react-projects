import {useContext, useRef} from "react";
import styles from './new-post.module.css'
import Modal from "../components/Modal.jsx";
import {Link, useNavigate} from "react-router-dom";
import {PostsContext} from "../store/PostsContext.jsx";

function NewPost() {
  const nameRef = useRef(null);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const {setPosts} = useContext(PostsContext);

  function handleNewPostSubmit(author, content) {
    if (!author || !content) return;
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author,
        content,
      }),
    })
    setPosts(prevPosts => [{
      author,
      content,
    }, ...prevPosts]);
    navigate('/');
  }

  function postSubmitHandler(e) {
    e.preventDefault();
    if (!nameRef.current || !bodyRef.current) {
      console.error("missing required fields to create new post");
      return;
    }
    handleNewPostSubmit(nameRef.current.value, bodyRef.current.value);
  }

  return (
    <Modal>
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
          <Link to='/' type='button'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
