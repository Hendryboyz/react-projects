import { Outlet } from 'react-router-dom';
import MainHeader from "../components/MainHeader.jsx";
import PostsContextProvider from "../store/PostsContext.jsx";

export default function RootLayout() {
  return (
    <PostsContextProvider>
      <MainHeader />
      <Outlet />
    </PostsContextProvider>
  );
}