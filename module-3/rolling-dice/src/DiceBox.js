import React from 'react';
import './index.css';


class DiceBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            die : [1,2,3,4,5]
        }
    this.rollTheDie = this.rollTheDie.bind(this);
    }


    rollTheDie(){
        let newDie = [];
        let dice = {
            1: "fas fa-dice-one",
            2: "fas fa-dice-two",
            3: "fas fa-dice-three",
            4: "fas fa-dice-four",
            5: "fas fa-dice-five",
            6: "fas fa-dice-six"
        }
        for (let i = 1; i < 6; i ++){
            newDie.push(dice[Math.floor(Math.random()*5)+1]);
        }
        this.setState({ die: newDie });
    }

    render(){
        return (
            <div className="container">
                Let's Get Ready to Roll!
                <div className="dice-box">
                    <i class={this.state.die[0]}></i>
                    <i class={this.state.die[1]}></i>
                    <i class={this.state.die[2]}></i>
                    <i class={this.state.die[3]}></i>
                    <i class={this.state.die[4]}></i>
                    <i class={this.state.die[5]}></i>
                </div>
                <button onClick={this.rollTheDie}>Lets Roll</button>
            </div>
        )
    }
}

export default DiceBox;