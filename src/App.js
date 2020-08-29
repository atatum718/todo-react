import React from "react";
import avatar from "../src/imgs/me-on-erica-bdayjpg.jpg";
import "./App.css";

const fontColor = "#10878E";

const user = {
  ProfileName: "Cash Tatum",
  profileImg: avatar,
};

const todoList = [
  {
    id: 1,
    description: "Go Grocery Shopping",
    isCompleted: true,
  },
  {
    id: 2,
    description: "Doctor's appointment",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Book flight",
    isCompleted: false,
  },
  {
    id: 4,
    description: "Call Mom",
    isCompleted: false,
  },
];
function App() {
  return (
    <div style={pageWrapperStyles}>
      <nav className="sidebar-nav" style={navStyles.sidebarNavContainer}>
        <div
          style={profileContainerStyles.containedItems}
          className="contained-items"
        >
          <img
            src={user.profileImg}
            alt="profile-img"
            style={navStyles.sidebarNavAvatar}
          />
          <h2 style={navStyles.sidebarNavUserName}>{user.ProfileName}</h2>
        </div>
        <ul style={navStyles.linkList}>
          <li style={navStyles.linkListItem} className={"sidebar-list"}>
            School
          </li>
          <li style={navStyles.linkListItem} className={"sidebar-list"}>
            Work
          </li>
          <li style={navStyles.linkListItem} className={"sidebar-list"}>
            {" "}
            Past
          </li>
          <li style={navStyles.linkListItem} className={"sidebar-list"}>
            New List
          </li>
        </ul>
      </nav>
      <div style={listStyles.listContainer}>
        <h1 className="todolist-title" style={listStyles.listTitle}>
          Todo List:
        </h1>
        <ul style={listStyles.list}>
          {todoList.map((todoItem) => (
            <li key={todoItem.id} style={listStyles.listItem}>
              <input
                style={listStyles.listItemInput}
                type="checkbox"
                checked={todoItem.isCompleted}
              />
              <span
                style={
                  todoItem.isCompleted
                    ? listStyles.listItemDescriptionCompleted
                    : listStyles.listItemDescriptionNotCompleted
                }
              >
                {todoItem.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const pageWrapperStyles = {
  display: "flex",
};
const listStyles = {
  listContainer: {
    padding: "0 2rem",
  },
  listTitle: {
    marginBottom: ".5rem",
  },
  list: {},
  listItem: {
    marginBottom: ".5rem",
  },
  listItemInput: {
    marginRight: ".3rem",
  },
  listItemDescriptionCompleted: {
    color: "#10878E",
    textDecoration: "line-through",
  },
  listItemDescriptionNotCompleted: {},
};

const profileContainerStyles = {
  containedItems: {
    display: "flex",
    justifyContent: " space-around",
    topMargin: "2rem",
  },
};
const navStyles = {
  sidebarNavContainer: {
    backgroundColor: "#AFEBEF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 2rem",
    minHeight: "100vh",
  },
  sidebarNavAvatar: {
    width: "3rem",
    borderRadius: "2rem",
  },
  sidebarNavUserName: {
    color: fontColor,
    fontSize: "16px",
  },
  linkList: {
    marginTop: "10rem",
  },

  linkListItem: {
    color: fontColor,
  },
};

export default App;
