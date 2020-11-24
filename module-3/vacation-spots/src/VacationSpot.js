import React from 'react';
// import faker from 'faker';


const VacationSpot = props => {
    let price = "$".repeat(Math.floor(props.price / 100));
    // let multiplier = Math.floor(props.price / 100);
    // price = price.repeat(multiplier);
    console.log(props.place + "  is this expensive: " + " price: " + price)

    
    console.log(props.image)
    return (
        <div style={{ 
            background:`url(${props.image}) no-repeat center center`
            }} className="card">
            <div className="content">
                <a href="/" className="author">
                    {props.place}
                </a>
                <div className="metadata">
                    <span className="content">Best time to go: {props.timeToGo}</span>
                </div>
                <div className="price">{"$".repeat(Math.floor(props.price / 100))}</div>
            </div>
        </div>
    )   
}

export default VacationSpot;