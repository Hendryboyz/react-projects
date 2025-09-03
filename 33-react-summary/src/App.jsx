import PostList from "./components/PostList.jsx";
import NewPost from "./components/NewPost.jsx";
import {useState} from "react";
import Modal from "./components/Modal.jsx";

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
  const [isModalVisible, setIsModalVisible] = useState(true);

  function handleNewPostSubmit(author, content) {
    if (!author || !content) return;

    setPosts(prevPosts => [...prevPosts, {
      author,
      content,
    }]);
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  return (
    <main>
      {isModalVisible && (
        <Modal onModalClose={handleModalClose}>
          <NewPost onPostSubmit={handleNewPostSubmit} />
        </Modal>
      )}
      <PostList posts={posts} />
    </main>
  );
}

export default App
