import React from "react";
import "./App1.css";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      isPause: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isPause) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // const {count1} = this.state;
      this.setState(({ count1 }) => {
        return {
          count1: count1 + 1
        };
      });
    }, 1000);
  }

  handlePause = () => {
    this.setState((prevState) => {
      return {
        isPause: !prevState.isPause
      };
    });
  };

  clearInterval = () => {
    clearInterval(this.interval1);
  };

  render() {
    return (
      <div className="space">
        {/* <div className="pop">Counter:{this.state.count}</div> */}
        <div className="pop">Counter1 : {this.state.count1}</div>
        <button onClick={this.handlePause}>PLAY!</button>
      </div>
    );
  }
}

export default App1;
