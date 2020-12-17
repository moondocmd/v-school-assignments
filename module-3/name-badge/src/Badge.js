import React from "react";
import "./Badge.css";

function Badge(props) { 
    const colors = {
        0 : "aqua",
        1 : "brown",
        2 : "cherry",
        3 : "green",
        4 : "indigo",
        5 : "mango",
        6 : "violet"
    }
    return ( 
        <div style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}} className="b-container" >
            <h1>Hello My Name is: {props.badge.fName} {props.badge.lName}</h1>
            <p>email: {props.badge.email}</p>
            <p>Place of Birth: {props.badge.birthPlace}</p>
            <p>Phone: {props.badge.phone}</p>
            <p>Favorite Food: {props.badge.favFood}</p>
            <p>About Me: {props.badge.about}</p>
        </div>
    )
}

export default Badge
