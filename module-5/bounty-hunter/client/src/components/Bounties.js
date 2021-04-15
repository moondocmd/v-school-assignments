import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from "./Bounty"
import "./styles.css";


const Bounties = ({bounties, deleteBounty, editBounty}) => {
    // const [bounties, setBounties] = useState([]);
    // // const [input, setInput] = useState('');
    // // const [showError, setError] = useState(false);

    // useEffect(() => {
    //     axios.get("/bounties")
    //         .then(res => setBounties(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    // const checkStocks = () => {
    //     console.log("Checking Stocks: ", stocks);
    // }     { fName: "Mike", lName: "Moon", living: true, bounty: 1000000, Type: "Jedi",  _id: uuid() },

    return (
        <div className="bounty-container">
            {bounties.map(bounty => {
                return (
                    <div className="ui card">
                        <div className="header">
                            <a className="header">{bounty.fName} {bounty.lName} </a>
                            <div className="description">Bounty: ${bounty.bounty}</div>
                        </div>
                        <button onClick={() => { deleteBounty(bounty._id) }} id="deleteButton"> Delete </button>
                        <button onClick={() => { editBounty(bounty._id) }} id="editButton">Edit </button>
                        <img className="image" src={bounty.imgURL} alt={bounty.lName} />
                    </div>
                )
            })}
        </div>
    )
}

export default Bounties