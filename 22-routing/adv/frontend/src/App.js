import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout, EventsLayout} from "./pages/Layout";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";

let routes = [{
  path: '/',
  element: <RootLayout />,
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
          loader: eventsLoader,
        },
        {
          /**
           * react router is smart enough to understand `new` isn't an :eventId because this route is more specific
           */
          path: 'new',
          element: <NewEventPage />
        },
        {
          path: ':eventId',
          id: 'event-detail',
          loader: eventDetailLoader,
          children: [
            {
              index: true,
              element: <EventDetailPage />,
            },
            {
              path: 'edit',
              element: <EditEventPage />,
            },
          ],
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
