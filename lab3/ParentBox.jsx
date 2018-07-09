import Children from './Children';

import React, { Component } from 'react';

export default class ParentBox extends Component {
  startTime = 0;
  endTime = 0;
  constructor(props) {
    super(props);
    this.addData = this.addData.bind(this);
    this.addDatas = this.addDatas.bind(this);
    this.remove = this.remove.bind(this);
    this.onUpdateStart = this.onUpdateStart.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
  }

  state = {
    data: [],
    elapsedTime: 0
  };
  static props = {};

  onUpdateStart = () => {
    this.startTime = window.performance.now();
    this.endTime = 0;
  };
  onUpdateEnd = () => {
      this.endTime = window.performance.now();
      this.setState({ elapsedTime: this.endTime - this.startTime });
  };

  componentWillMount() {
    console.log(`${this.props.title} componentWillMount`);
  }

  componentDidMount() {
    console.log(`${this.props.title} componentDidMount`);
  }

  componentWillReceiveProps() {
    console.log(`${this.props.title} componentWillReceiveProps`);
  }

  componentWillUpdate() {
    console.log(`${this.props.title} componentWillUpdate`);
  }

  componentDidUpdate() {
    console.log(`${this.props.title} componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`${this.props.title} componentWillUnmount`);
  }

  addData() {
    this.setState({ data: [...this.state.data, `hello world- ${this.state.data.length}`] });
  }

  addDatas() {
    let newData = [];
    for (let i = 0 ; i < 10000 ; i++){
      newData.push(`hello world- ${this.state.data.length + i}`)
    }
    this.setState({ data: [...this.state.data, ...newData] });
  }

  remove(value) {
    let data = this.state.data.filter(item => {
      return item !== value;
    });

    this.setState({ data: data });
  }

  render() {
    console.log(`>> ${this.props.title} render`);
    return (
      <div className="commentBox">
        <h1>{this.props.title}</h1>
        <button type="button" onClick={this.addData}>
          add
        </button>
        <button type="button" onClick={this.addDatas}>
          add 10k
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ data: [] });
          }}
        >
          clear
        </button>
        <br/>
        Render Time: {this.state.elapsedTime.toFixed(2)} ms
        <hr />
        <Children data={this.state.data} 
          onRemove={this.remove} 
          onUpdateStart={this.onUpdateStart} 
          onUpdateEnd={this.onUpdateEnd}/>
      </div>
    );
  }
}
