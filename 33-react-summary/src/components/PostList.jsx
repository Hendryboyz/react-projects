import Post from "./Post.jsx";
import styles from "./postlist.module.css";

function PostList({posts}) {
  return (
    <ul className={styles.posts}>
      {posts.map(post => (
        <Post author={post.author} body={post.content} />
      ))}
    </ul>
  );
}

export default PostList;