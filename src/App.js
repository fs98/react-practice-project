import React, {useState, Fragment} from 'react';

import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const usersArray = [
  {
    id: "1",
    name: "Max",
    age: "37",
  },
  {
    id: "2",
    name: "Penelope",
    age: "28",
  },
];

const App = (props) => {

  const [users, setUsers] = useState(usersArray);

  const saveUserDataHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  }

  return (
    <Fragment>
      <UserForm onSaveUserData={saveUserDataHandler}/>
      <UserList users={users} />
    </Fragment>
  );
};

export default App;
