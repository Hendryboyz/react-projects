import {createContext, useState} from "react";

export const PostsContext = createContext({
  posts: [],
  setPosts: (prevState) => {}
});

function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const contextValue = {
    posts,
    setPosts,
  };
  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContextProvider;