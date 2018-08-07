import Children from './Children';

import React, { Component } from 'react';

export default class ParentBox extends Component {
  
  constructor(props) {
    super(props);
    this.addData = this.addData.bind(this);
    this.Modify = this.Modify.bind(this);
  }

  state = {
    data: []
  };
  static props = {};
 
  componentDidMount() {
    [1, 2, 3, 4, 5].forEach((i) => {this.addData(i)})
  }

  addData(i) {
    // X Wrong
    // this.setState({ data: [...this.state.data, `hello world- ${i}`] });

    this.setState((preState) => ({ data: [...preState.data, `hello world- ${i}`] }));
  }

  Modify(value) {
    // state object are immutable
    let copy = this.state.data.slice()
    let index = copy.indexOf(value)
    copy[index] = copy[index] + 'm'
    this.setState({ data: copy });
  }

  render() {
    console.log(`>> ${this.props.title} render`);
    return (
      <div className="commentBox">
        <h1>{this.props.title}</h1>
        <hr />
        <Children data={this.state.data} 
          onModify={this.Modify} 
        />
      </div>
    );
  }
}
