import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import EventsNavigation from "../components/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export { EventsLayout, RootLayout };