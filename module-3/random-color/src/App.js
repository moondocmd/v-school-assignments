import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        color: ""
      }
      this.updateColor = this.updateColor.bind(this);
  }

  updateColor(){
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then(response =>{
      let ranColor = "#" + response.data.new_color;
      this.setState({ color: ranColor });
    }).then( () => {
      document.getElementById("container").style.backgroundColor = this.state.color;
    })
  }

  render() {
    return (
      <div id="container" className="container">
        <p>Click below to generate a random background color</p>
        <button onClick={this.updateColor}>Click Here</button>
      </div>
    )
  }
}

export default App;
