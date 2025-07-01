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
            <li>
              <NavLink
                to={link.path}
                className={({isActive}) => isActive ? classes.active : null}
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
