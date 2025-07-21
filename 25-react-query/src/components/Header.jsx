import {useIsFetching} from "@tanstack/react-query";

export default function Header({ children }) {
  // 0 if not fetching or the progress number
  const fetching = useIsFetching();
  return (
    <>
      <div id="main-header-loading">
        {fetching > 0 && <progress/>}
      </div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
