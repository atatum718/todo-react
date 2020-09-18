import React from "react";

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
    if (this.state.day === 4) {
      greeting = " Happy Thursday!, What's On Your Agenda Today?";
    }
    if (this.state.day === 5) {
      greeting = "Yay its Friday!, What's On Your Agenda Today?";
    }
    return (
      <div className="background-image" style={styles.greetingSentence}>
        {greeting}
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}
const styles = {
  greetingSentence: {
    textAlign: "center",
    marginTop: "10rem",
  },
};

export default Clock;
