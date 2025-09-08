import {Outlet} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PostList from "../components/PostList.jsx";
import {PostsContext} from "../store/PostsContext.jsx";

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
  const {setPosts} = useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [setPosts]); /* only the deps change will trigger the useEffect() function be executed again */


  return (
    <>
      <Outlet />
      <main>
        {!isLoading && <PostList />}
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
