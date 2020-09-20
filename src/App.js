import React from "react";
import avatar from "../src/imgs/me-on-erica-bdayjpg.jpg";
import "./App.css";
import TodoList from "./components/TodoList";

import Nav from "./components/Nav.js";
import Clock from "./components/Clock";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    user: {
      ProfileName: "Cash Tatum",
      profileImg: avatar,
    },
  };

  render() {
    return (
      <div style={styles.pageContainer}>
        <Nav user={this.state.user} />
        <Switch>
          <Route exact path="/">
            <Clock />
          </Route>
          <Route path="/todos">
            <TodoList />
          </Route>
        </Switch>
      </div>
    );
  }
}

const styles = {
  pageContainer: {
    display: "flex",
    width: "100%",
  },
};

export default App;
