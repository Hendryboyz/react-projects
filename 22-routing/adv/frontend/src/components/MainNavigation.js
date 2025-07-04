import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const LINKS = [
  {path: '', title: 'Home'},
  {path: 'events', title: 'Events'},
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {LINKS.map(link => (
            <li key={link.title}>
              <NavLink
                to={link.path}
                className={({isActive}) => isActive ? classes.active : undefined}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
