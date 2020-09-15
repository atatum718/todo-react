import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todoitem(props) {
  const handleCheckTodo = () => props.onCheckTodo(props.todoItem.id);
  const handleDeleteTodo = () => props.onDeleteTodo(props.todoItem.id);
  return (
    <li key={props.todoItem.id} style={styles.listItem}>
      <input
        style={styles.listItemInput}
        type="checkbox"
        defaultChecked={props.todoItem.isCompleted}
        onChange={handleCheckTodo}
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
      <button onClick={handleDeleteTodo}>
        <FontAwesomeIcon icon={faTrash} style={{ color: "#10878E" }} />
      </button>
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
