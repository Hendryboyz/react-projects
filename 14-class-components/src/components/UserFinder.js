import { Fragment, useState, useEffect, Component, useContext } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from "../store/users-context";

class ClassUserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchTerm === this.state.searchTerm) {
      return;
    }
    this.setState({
      filteredUsers: this.context.users.filter(
        (user) => user.name.includes(this.state.searchTerm)),
    })
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  // render() {
  //   return (
  //     <UsersContext.Consumer>
  //       {context => (
  //         <Fragment>
  //           <div className={classes.finder}>
  //             <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
  //           </div>
  //           <Users users={this.state.filteredUsers} />
  //         </Fragment>
  //       )}
  //     </UsersContext.Consumer>
  //   );
  // }

  render() {
    return (
      <Fragment>
       <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
       </div>
       <Users users={this.state.filteredUsers} />
     </Fragment>
    );
  }
}

const UserFinder = () => {
  const { users } = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default ClassUserFinder;