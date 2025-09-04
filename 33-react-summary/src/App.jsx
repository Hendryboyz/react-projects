import PostList from "./components/PostList.jsx";
import NewPost from "./components/NewPost.jsx";
import {useState} from "react";
import Modal from "./components/Modal.jsx";
import MainHeader from "./components/MainHeader.jsx";

const DEFAULT_POSTS = [
  {
    author: 'Henry',
    content: 'have a nice day',
  },
  {
    author: 'Maximilian',
    content: 'hello world',
  },
];

// the function that return JXS code is React function component
function App() {
  const [posts, setPosts] = useState(DEFAULT_POSTS);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleNewPostSubmit(author, content) {
    if (!author || !content) return;

    setPosts(prevPosts => [...prevPosts, {
      author,
      content,
    }]);
    handleModalClose();
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  function handleModalShow() {
    setIsModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={handleModalShow} />
      <main>
        {isModalVisible && (
          <Modal onModalClose={handleModalClose}>
            <NewPost onPostSubmit={handleNewPostSubmit} onCancel={handleModalClose} />
          </Modal>
        )}
        <PostList posts={posts} />
      </main>
    </>
  );
}

export default App
