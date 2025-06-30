import {routes} from "../utils/routes";
import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {routes.map((route, i) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                className={({isActive}) => isActive ? classes.active : undefined}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}