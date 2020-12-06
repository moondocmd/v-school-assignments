import React from 'react';
import Square from './Square';
import './index.css';

class Turntable extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            squares: ['white', 'white', 'white', 'white']
        };
        // This binding is necessary to make `this` work in the callback
        this.smallTimeDJ = this.smallTimeDJ.bind(this);
        this.partyDJ = this.partyDJ.bind(this);
        this.proDJ = this.proDJ.bind(this);
        this.proDJ2 = this.proDJ2.bind(this);
        this.ampItUp = this.ampItUp.bind(this);
        this.discoTime = this.discoTime.bind(this);
    }

    smallTimeDJ(){
        if (this.state.squares[0] === 'white'){
            this.setState({
                squares: ['black','black','black','black']
            });
        } else {
            this.setState({
                squares: ['white','white','white','white']
            });
        }
    }

    partyDJ(){
        // let items = [...this.state.squares];
        // items[0] = items[1] = 'purple';
        this.setState({ squares: [ 'purple', 'purple', this.state.squares[2], this.state.squares[3]] });
    }

    proDJ(){
        let items = [...this.state.squares];
        items[2] = 'blue'; 
        this.setState({ squares: items });
    }

    proDJ2(){
        let items = [...this.state.squares];
        items[3] = 'blue'; 
        this.setState({ squares: items });
    }

    ampItUp() {  
        setInterval(()=>{
            this.setState({squares: ['pink','red','orange','yellow']})
        }, 1500);
    }

    discoTime(){
        new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3').play();
    }

    render(){
        const squares = this.state.squares.map (square => {
            return <Square color= {square} />
        })

        return (
            <div style={{background:`url(${'https://coursework.vschool.io/content/images/size/w2000/2018/02/denon-dj-mc7000-top_960x540.jpg'}) no-repeat center center`}}
                className="container">
                {squares}
                <button onClick={this.smallTimeDJ}>The Warmer</button>
                <button onClick={this.partyDJ}>Party Boy</button>
                <button onClick={this.proDJ}>Pro DJ 1</button>
                <button onClick={this.proDJ2}>Pro DJ 2</button>
                <button onClick={this.ampItUp}>Amp It Up</button>
                <button onClick={this.discoTime}>DISCO DISCO</button>
            </div>
        )
    }
}

export default Turntable;