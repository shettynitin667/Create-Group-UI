import React from "react";
import User from "../User";
import styles from "./styles.module.css";

const UsersList = ({ users }) => {
  let userListRender = users.map((user) => <User key={user.id} user={user} />);
  return <div className={styles.userList}>{userListRender}</div>;
};

export default UsersList;
