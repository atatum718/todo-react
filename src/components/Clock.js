import React from "react";
import { BackgroundImage } from "./Dashboard.js";

class Clock extends React.Component {
  state = {
    now: new Date(),
  };
  tick = () => {
    this.setState({ now: new Date() });
  };
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
    this.setState((state) => {
      return { day: state.now.getDay() };
    });
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }
  render() {
    let greeting = "";
    if (this.state.day === 1) {
      greeting =
        " Happy Monday!, Top of the week. What's On Your Agenda Today? ";
    }
    if (this.state.day === 5) {
      greeting = "Yay its Friday!, What's On Your Agenda Today? ";
    } else {
      greeting = " What do you need to do Today? ";
    }

    return (
      <BackgroundImage style={styles.greetingSentence}>
        {greeting}
        {this.state.now.toLocaleTimeString()}
      </BackgroundImage>
    );
  }
}
const styles = {
  greetingSentence: {
    textAlign: "center",
    fontSize: "30px",
    fontFamily: " Verdana, Geneva, Tahoma, sans-serif",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Clock;
