import styles from "./UserList.module.css";

import Card from "./UI/Card";
import User from "./User";

const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card className={styles.user}>
        <ul>
          {props.users.map((user) => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </Card>
    );
  }

  return <div></div>;
};

export default UserList;
