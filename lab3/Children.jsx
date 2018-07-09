
import React, { PureComponent } from 'react'

export default class Children extends PureComponent {
  
  componentWillMount() {
    console.log('Children componentWillMount')
  }
  componentDidMount() {
    console.log('Children componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    console.log('Children componentWillReceiveProps')
  }
  componentWillUpdate () {
    console.log('Children componentWillUpdate')
    this.props.onUpdateStart();
  }
  
  componentDidUpdate () {
    console.log('Children componentDidUpdate')
    this.props.onUpdateEnd();
    
  }

  render() {
    
    console.log(`>> Children render`);
    return (
      <div>
      Child Component : 
        <ul>
        {
          this.props.data.map( (item, index)=> {
            return <li key={index}>
              {item} 
              <button type="button" onClick={()=>{this.props.onRemove(item)}} >x</button>
            </li>
          })
        }
        </ul>
        
      </div>
    );
  }
}
 