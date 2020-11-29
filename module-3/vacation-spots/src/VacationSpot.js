import React from 'react';

const VacationSpot = props => {
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