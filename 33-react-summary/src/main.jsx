import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App, {loader as postsLoader} from './routes/App.jsx'
import NewPost, {action as submitNewPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetail, {loader as postDetailLoader} from "./routes/PostDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<RootLayout />),
    children: [
      {
        path: "/",
        element: (<App />),
        loader: postsLoader,
        children: [
          {
            path: "/new",
            element: (<NewPost />),
            action: submitNewPostAction,
          },
          {
            path: "/:postId",
            element: (<PostDetail />),
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
