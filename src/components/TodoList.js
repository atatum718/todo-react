import React from "react";
import Todoitem from "./Todoitem";

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
    );
  }
}

export default TodoList;

const styles = {
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
