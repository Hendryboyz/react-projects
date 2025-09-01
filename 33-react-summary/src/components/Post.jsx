import styles from './Post.module.css';

// component file don't force to start with Uppercase but the component name MUST be named starting with Uppercase
function Post({ author, content }) {
  return (
    <div className={styles.post}>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
}

export default Post;