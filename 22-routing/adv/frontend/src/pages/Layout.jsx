import {Outlet, useNavigation} from "react-router-dom";
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
  // const navigation = useNavigation();

  // const {state} = navigation;

  return (
    <>
      <MainNavigation />
      <main>
        {/*{state === 'loading' && <p>Loading...</p>}*/}
        <Outlet />
      </main>
    </>
  );
}

export { EventsLayout, RootLayout };