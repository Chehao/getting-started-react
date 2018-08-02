
import React, { PureComponent } from 'react'

export default class Children extends PureComponent {

  render() {
    
    console.log(`>> Children render`);
    let randomId = Math.floor(Math.random()*100)
    return (
      <div>
      Child Component : 
        <ul>
        {
          this.props.data.map( (item, index)=> {
            return <li key={randomId + index}>
              <button type="button" onClick={()=>{this.props.onModify(item)}} >add</button>
              {item} 
            </li>
          })
        }
        </ul>
        
      </div>
    );
  }
}
 