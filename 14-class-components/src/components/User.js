import {Component} from "react";
import classes from './User.module.css';

class UserClass extends Component {
  componentWillUnmount() {
    console.log(`${this.props.name} user unmount`)
  }

  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    );
  }
}

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default UserClass;
