import {useContext, useRef} from "react";
import {Form, Link, redirect, useNavigate} from "react-router-dom";
import styles from './new-post.module.css'
import Modal from "../components/Modal.jsx";
import {PostsContext} from "../store/PostsContext.jsx";

function NewPost() {
  const nameRef = useRef(null);
  const bodyRef = useRef(null);
  // const {setPosts} = useContext(PostsContext);
  //
  // function handleNewPostSubmit(author, content) {
  //   if (!author || !content) return;
  //
  //   setPosts(prevPosts => [{
  //     author,
  //     content,
  //   }, ...prevPosts]);
  //   navigate('/');
  // }


  return (
    <Modal>
      <Form method='post' className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            style={{
              resize: "none",
            }}
            id="body"
            name="body"
            required
            rows={3}
            ref={bodyRef} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input required type="text" name="author" id="name" ref={nameRef} />
        </p>
        <p className={styles.actions}>
          <Link to='/' type='button'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const author = formData.get("author");
  const content = formData.get("body");
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author,
      content,
    }),
  });

  return redirect('/');
}