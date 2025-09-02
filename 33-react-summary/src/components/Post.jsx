// https://github.com/css-modules/css-modules
import styles from './post.module.css'; // css module require specific bundle

// component file don't force to start with Uppercase but the component name MUST be named starting with Uppercase
function Post(props) {
  return (
    <li
      className={styles.post}
      // style={{ textAlign: 'left' }}
    >
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </li>
  );
}

export default Post;