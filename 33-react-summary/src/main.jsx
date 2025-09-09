import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App, {loader as PostsLoader} from './routes/App.jsx'
import NewPost, {action as SubmitNewPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<RootLayout />),
    children: [
      {
        path: "/",
        element: (<App />),
        loader: PostsLoader,
        children: [
          {
            path: "/new",
            element: (<NewPost />),
            action: SubmitNewPostAction,
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
