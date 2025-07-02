import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout, EventsLayout} from "./pages/Layout";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
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
          loader: async () => {
            try {
              const resourceUrl = 'http://localhost:8080/events';
              const resp = await fetch(resourceUrl, {
                method: 'GET',
              });
              if (resp.ok) {
                const data = await resp.json();
                return {
                  events: data.events,
                  error: undefined,
                };
              }
            } catch (e) {
              console.error(e);
              return {
                events: [],
                error: 'failed to fetch events',
              };
            }
          },
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
