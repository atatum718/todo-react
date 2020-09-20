import React from "react";
import { Link } from "react-router-dom";
const fontColor = "#10878E";

function Nav(props) {
  return (
    <nav className="sidebar-nav" style={styles.Container}>
      <div
        style={profileContainerStyles.containedItems}
        className="contained-items"
      >
        <img
          src={props.user.profileImg}
          alt="profile-img"
          style={styles.Avatar}
        />
        <h2 style={styles.UserName}>{props.user.ProfileName}</h2>
      </div>
      <Link to="/">Home</Link>
      <Link to="/todos">Todo List</Link>
      <ul style={styles.linkList}>
        <li style={styles.linkListItem} className={"sidebar-list"}>
          School
        </li>
        <li style={styles.linkListItem} className={"sidebar-list"}>
          Work
        </li>
        <li style={styles.linkListItem} className={"sidebar-list"}>
          Past
        </li>
        <li style={styles.linkListItem} className={"sidebar-list"}>
          New List
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

const profileContainerStyles = {
  containedItems: {
    display: "flex",
    justifyContent: " space-around",
  },
};

const styles = {
  Container: {
    backgroundColor: "#AFEBEF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    // padding: "0 2rem",
    width: "33%",
    minHeight: "100vh",
  },
  Avatar: {
    width: "3rem",
    borderRadius: "2rem",
  },
  UserName: {
    color: fontColor,
    fontSize: "16px",
  },
  linkList: {
    marginTop: "5rem",
  },

  linkListItem: {
    color: fontColor,
    padding: "0.5rem",
    width: "100%",
  },
};
