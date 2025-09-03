import PostList from "./components/PostList.jsx";
import NewPost from "./components/NewPost.jsx";
import {useState} from "react";

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

  function handleNewPostSubmit(author, content) {
    if (!author || !content) return;

    setPosts(prevPosts => [...prevPosts, {
      author,
      content,
    }]);
  }

  return (
    <main>
      <NewPost onPostSubmit={handleNewPostSubmit} />
      <PostList posts={posts} />
    </main>
  );
}

export default App
