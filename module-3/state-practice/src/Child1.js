import React, {Component} from "react";

class Child1 extends Component{
    constructor (props){
        super (props);
        this.state = {
            num : 1,
            arr : ["Hello", "World"]
        }
    }

    render(){
        return (
            <div>
                {this.state.num}
                <form id="badgeForm" onSubmit={this.addBadge}>
                    <input 
                        type="text" 
                        id="fName"
                        name="fName" 
                        placeholder="First Name"
                        pattern=".{3,}"
                        onChange={e => {
                            this.props.handleChange(this.state.arr)
                        }} 
                    />
                </form>
            </div>
        )
    }
}

export default Child1;