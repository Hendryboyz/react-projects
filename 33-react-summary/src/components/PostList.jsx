import Post from "./Post.jsx";
import styles from "./postlist.module.css";
import {useContext} from "react";
import {PostsContext} from "../store/PostsContext.jsx";

function PostList() {
  const {posts} = useContext(PostsContext)
  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(post => (
            <Post key={post.id} author={post.author} body={post.content} />
          ))}
        </ul>
      )}
      {!posts || posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start to add some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;