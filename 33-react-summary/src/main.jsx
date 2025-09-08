import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App from './routes/App.jsx'
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<RootLayout />),
    children: [
      {
        path: "/",
        element: (<App />),
        children: [
          {
            path: "/new",
            element: (<NewPost />),
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
