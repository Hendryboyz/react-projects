import { MdPostAdd, MdNotifications  } from "react-icons/md";
import styles from './main-header.module.css'

function MainHeader({onCreatePost}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdNotifications />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  )
}

export default MainHeader;