import { MdPostAdd, MdNotifications  } from "react-icons/md";
import styles from './main-header.module.css'
import Modal from "./Modal.jsx";
import NewPost from "./NewPost.jsx";
import {useContext, useState} from "react";
import {PostsContext} from "../store/PostsContext.jsx";

function MainHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    handleModalClose();
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  function handleModalShow() {
    setIsModalVisible(true);
  }

  return (
    <header className={styles.header}>
      {isModalVisible && (
        <Modal onModalClose={handleModalClose}>
          <NewPost onPostSubmit={handleNewPostSubmit} onCancel={handleModalClose} />
        </Modal>
      )}
      <h1 className={styles.logo}>
        <MdNotifications />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={handleModalShow}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  )
}

export default MainHeader;