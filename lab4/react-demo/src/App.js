import React, { Component } from 'react'
import Children from './Children';

class App extends Component {
  
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div className="App">
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Children name="child 1" />
      </div>
    );
  }
}

export default App;
