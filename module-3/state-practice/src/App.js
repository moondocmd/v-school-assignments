import React, {Component} from "react";
import Child1 from './Child1';
import Child2 from './Child2';

class App extends Component{
  constructor (props){
      super (props);
      this.state = {
          num : 2,
          array : []
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(arr){
    console.log("Cal")
    this.setState(prevState => {
      return {
        array: arr
      };
    });

  }

  render(){
      return (
          <div>
            <Child1 handleChange = {this.handleChange} />
            <Child2 arr={this.state.arr} />
            <h2>Arr = {this.state.arr}</h2>
          </div>
      )
  }
}

export default App;
