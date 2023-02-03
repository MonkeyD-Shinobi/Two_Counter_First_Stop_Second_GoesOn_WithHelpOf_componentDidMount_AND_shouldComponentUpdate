import React from "react";
import "./styles.css";
import App1 from "./App1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.state.count);
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // const {count} = this.state;
      this.setState(({ count }) => {
        return {
          count: count + 1
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div>counter : {this.state.count}</div>
        <App1 />
      </div>
    );
  }
}

export default App;
