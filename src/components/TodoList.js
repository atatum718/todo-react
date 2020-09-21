import React from "react";
import Todoitem from "./Todoitem";
import styled from "styled-components";

const TODO_LIST_KEY = "todoapp_list";
class TodoList extends React.Component {
  state = {
    todoList: [
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
    ],
    newTodoDescription: "",
  };

  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        todoList: JSON.parse(todoListStr),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoList !== prevState.todoList) {
      let todoListStr = JSON.stringify(this.state.todoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }
  }

  handleChangeNewTodo = (event) => {
    const value = event.target.value;
    this.setState({ newTodoDescription: value });
  };
  handleAddNewTodo = () => {
    this.setState((state) => {
      return {
        todoList: [
          ...state.todoList,
          { id: 5, description: state.newTodoDescription, isCompleted: false },
        ],
        newTodoDescription: "",
      };
    });
  };

  handleCheckTodo = (id) => {
    this.setState((state) => {
      let newList = state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      return { todoList: newList };
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => {
      let filteredList = state.todoList.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      return { todoList: filteredList };
    });
  };

  render() {
    return (
      <ListContainer>
        <ListTitle>Todo List:</ListTitle>
        <ul>
          {this.state.todoList.map((todoItem) => (
            <Todoitem
              key={todoItem.id}
              todoItem={todoItem}
              onCheckTodo={this.handleCheckTodo}
              onDeleteTodo={this.handleDeleteTodo}
            />
          ))}
        </ul>
        <NewItemInput
          onChange={this.handleChangeNewTodo}
          value={this.state.newTodoDescription}
          type="text"
        />
        <NewItemButton onClick={this.handleAddNewTodo}>
          Add New Todo
        </NewItemButton>
      </ListContainer>
    );
  }
}
const ListContainer = styled.div`
  padding: 0 2rem;
  width: 67%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListTitle = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;

  font-size: 25px;
`;
const NewItemInput = styled.input`
  margin-top: 2rem;
`;
const NewItemButton = styled.button`
  margin-top: 0.5rem;
`;
export default TodoList;
