
import React, { PureComponent } from 'react'

export default class PureChildren extends PureComponent {
  
  componentWillMount() {
    console.log('Children componentWillMount')
  }
  componentDidMount() {
    console.log('Children componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log(`${this.props.name} componentWillReceiveProps`)
  }
  componentWillUpdate () {
    console.log('Children componentWillUpdate')
  }
  
  componentDidUpdate () {
    console.log('Children componentDidUpdate')
  }

  render() {
    console.log(`${this.props.name} render`);
    return (
      <div>
        Child Component : {this.props.name}
      </div>
    );
  }
}
 