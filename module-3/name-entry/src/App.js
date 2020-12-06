import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          input: "",
          inputs: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.updateInput = this.updateInput.bind(this);
  }
  
  handleChange(event) {
      this.setState({
          input: event.target.value
      })
  }
  
  updateInput(event){
    event.preventDefault();
    let items = [...this.state.inputs];
    items.push(this.state.input);
    this.setState({ inputs: items });
    document.getElementById("inputBox").value = "";
    this.setState({ input: "" });
  }

  render() {
      const inputs = this.state.inputs.map(input => {
        return <ul>{input}</ul>
      })

      return (
        <div className="container">
          <form>
              <input 
                  type="text" 
                  id="inputBox"
                  // value={this.state.input} 
                  name="input" 
                  placeholder="Type here" 
                  onChange={this.handleChange} 
              />
              <br />
              <h1 id="currentInput">{this.state.input}</h1>
              <button className="button" onClick={this.updateInput}>Click here</button>
              {inputs}
          </form>
        </div>
      )
  }
}

export default App

