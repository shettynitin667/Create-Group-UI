import React, { Component } from "react";
import UsersList from "../UsersList";
import GroupData from "../GroupData";
import styles from "./styles.module.css";
import axios from "axios";

class AddGroup extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    let { data } = await axios.get(
      "http://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    );
    this.setState({ users: data });
  };

  sortUsers = (e) => {
    let userList = this.state.users;
    if (e == "Sort Ascending") {
      userList.sort((a, b) => {
        if (a["name"] > b["name"]) {
          return 1;
        } else if (a["name"] < b["name"]) {
          return -1;
        }
        return 0;
      });
    }
    if (e == "Sort Descending") {
      userList.sort((a, b) => {
        if (a["name"] > b["name"]) {
          return -1;
        } else if (a["name"] < b["name"]) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({ users: userList });
  };

  render() {
    return (
      <React.Fragment>
        <GroupData />
        <p className={styles.list}>Select Participants</p>
        <select
          className={styles.dropdown}
          onChange={(e) => this.sortUsers(e.target.value)}
        >
          <option>Apply Filter</option>
          <option>Sort Ascending</option>
          <option>Sort Descending</option>
        </select>
        <UsersList users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default AddGroup;
