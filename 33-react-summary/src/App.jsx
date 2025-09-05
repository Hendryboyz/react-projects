import PostList from "./components/PostList.jsx";
import NewPost from "./components/NewPost.jsx";
import {useEffect, useState} from "react";
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
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts", {
        method: "GET",
      })
      if (!response.ok) {
        console.error(`failed to fetch posts ${response.status}`);
      }
      const fetchedData = await response.json();
      setPosts(fetchedData.posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, [/* only the deps change will trigger the useEffect() function be executed again */]);

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
    <>
      <MainHeader onCreatePost={handleModalShow} />
      <main>
        {isModalVisible && (
          <Modal onModalClose={handleModalClose}>
            <NewPost onPostSubmit={handleNewPostSubmit} onCancel={handleModalClose} />
          </Modal>
        )}
        {!isLoading && <PostList posts={posts} />}
        {isLoading && (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>Loading posts...</p>
          </div>)
        }
      </main>
    </>
  );
}

export default App
