import {Outlet, useLoaderData} from "react-router-dom";
import {useContext, useEffect} from "react";
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
  const posts = useLoaderData();

  useEffect(() => {
    setPosts(posts);
  }, [setPosts, posts]); /* only the deps change will trigger the useEffect() function be executed again */

  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts", {
    method: "GET",
  })
  if (!response.ok) {
    console.error(`failed to fetch posts ${response.status}`);
  }
  const fetchedData = await response.json();
  return fetchedData.posts;
}
