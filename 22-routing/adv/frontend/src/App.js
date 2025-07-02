import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventsNavigation from "./components/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

let routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: '/events',
      element: <EventsLayout />,
      children: [
        {
          index: true,
          element: <EventsPage />,
        },
        {
          path: 'new',
          element: <NewEventPage />
        },
        {
          path: ':eventId',
          element: <EventDetailPage />,
        },
        {
          path: ':eventId/edit',
          element: <EditEventPage />,
        },
      ],
    },
  ],
}];
const routers = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
