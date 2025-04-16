import logo from '../assets/logo.png';
import classnames from './header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classnames.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
