import React, { Component } from 'react'
import Children from './Children';

class App extends Component {
  state = {
    isOpen: false
  }
  onclick = (e) => {
    this.setState((preState) => ({isOpen: !preState.isOpen}))
  }
  render() {
    return (
      <div className="App">
        <Children name="clidren1" />
        <Children name="clidren2" />
        <button onClick={this.onclick} >toggle</button>
      </div>
    );
  }
}

export default App;
