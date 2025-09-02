import PostList from "./components/PostList.jsx";

const posts = [
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
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}

export default App
