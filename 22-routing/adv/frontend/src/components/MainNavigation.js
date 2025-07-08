import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

const LINKS = [
  {path: '', title: 'Home'},
  {path: 'events', title: 'Events'},
  {path: 'newsletter', title: 'Newsletter'},
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
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
