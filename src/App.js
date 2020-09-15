import React from "react";
import avatar from "../src/imgs/me-on-erica-bdayjpg.jpg";
import "./App.css";
import Todoitem from "./components/Todoitem.js";
import Nav from "./components/Nav.js";

class App extends React.Component {
  state = {
    user: {
      ProfileName: "Cash Tatum",
      profileImg: avatar,
    },
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
          return { ...item, iscompleted: !item.iscompleted };
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
      <div style={styles.pageContainer}>
        <Nav user={this.state.user} />
        <div style={styles.listContainer}>
          <h1 style={styles.listTitle}>Todo List:</h1>
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
          <input
            style={styles.newItemInput}
            onChange={this.handleChangeNewTodo}
            value={this.state.newTodoDescription}
            type="text"
          />
          <button onClick={this.handleAddNewTodo} style={styles.newItemButton}>
            Add New Todo
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  pageContainer: {
    display: "flex",
    width: "100%",
  },
  listContainer: {
    padding: "0 2rem",
    width: "67%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listTitle: {
    marginTop: "1.5rem",
    marginBottom: "1rem",
    borderBottom: "1px solid black",
    // marginTop: "2rem",
    fontSize: "25px",
  },
  newItemInput: {
    marginTop: "2rem",
  },
  newItemButton: {
    marginTop: ".5rem",
  },
};

export default App;
