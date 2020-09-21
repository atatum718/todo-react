import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Todoitem(props) {
  const handleCheckTodo = () => props.onCheckTodo(props.todoItem.id);
  const handleDeleteTodo = () => props.onDeleteTodo(props.todoItem.id);
  return (
    <ListItem key={props.todoItem.id}>
      <Checkbox
        type="checkbox"
        defaultChecked={props.todoItem.isCompleted}
        onChange={handleCheckTodo}
      />
      <Description completed={props.todoItem.isCompleted}>
        {props.todoItem.description}
      </Description>
      <button onClick={handleDeleteTodo}>
        <FontAwesomeIcon icon={faTrash} style={{ color: "#10878E" }} />
      </button>
    </ListItem>
  );
}

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;
const Checkbox = styled.input`
  margin-right: 0.3rem;
`;

const Description = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.completed && "#10878E"};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export default Todoitem;
