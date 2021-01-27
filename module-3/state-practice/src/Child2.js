import React, {Component} from "react";

class Child2 extends Component{
    constructor (props){
        super (props);
        this.state = {
            num : 2
        }
    }

    render(){
        return (
            <div>{this.state.num}</div>
        )
    }
}

export default Child2;