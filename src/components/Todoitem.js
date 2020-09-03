import React from "react";

function Todoitem(props) {
  return (
    <li key={props.todoItem.id} style={styles.listItem}>
      <input
        style={styles.listItemInput}
        type="checkbox"
        checked={props.todoItem.isCompleted}
      />
      <span
        style={
          props.todoItem.isCompleted
            ? styles.descriptionCompleted
            : styles.descriptionNotCompleted
        }
      >
        {props.todoItem.description}
      </span>
    </li>
  );
}

const styles = {
  listItem: {
    marginBottom: ".5rem",
  },
  listItemInput: {
    marginRight: ".3rem",
  },
  descriptionCompleted: {
    color: "#10878E",
    textDecoration: "line-through",
  },
  descriptionNotCompleted: {},
};

export default Todoitem;
