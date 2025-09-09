import {Link, useLoaderData} from "react-router-dom";
import styles from './post-detail.module.css';
import Modal from "../components/Modal.jsx";

function PostDetail() {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..'>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.content}</p>
      </main>
    </Modal>
  );
}

export default PostDetail;

export async function loader({params}) {
  const {postId} = params;
  const resourceUrl = `http://localhost:8080/posts/${postId}`
  const resp = await fetch(resourceUrl, {
    method: "GET",
  });
  const data = await resp.json();
  return data.post;
}