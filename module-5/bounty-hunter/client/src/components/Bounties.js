import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from "./Bounty"
import "./styles.css";


function Bounties(props) {
    const [bounties, setBounties] = useState([]);
    // const [input, setInput] = useState('');
    // const [showError, setError] = useState(false);

    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteBounty = (bountyId) => {
        console.log("Deleting: ", bountyId);
        const removedArr = [...bounties].filter(bounty => bounty._id !== bountyId);
        setBounties(removedArr);
    }

    const editBounty = (bountyId) => {
        console.log("looking at: ", bountyId)
        // let [ug] = this.state.uglyList.filter( (u) => { return u._id === uglyId });
        // let title = prompt("Please enter a new title", ug.title);
        // let description = prompt("Please enter a new description", ug.description);

        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ 
        //         title: title,
        //         description: description 
        //     })
        // };
        // fetch('https://api.vschool.io/michaelmooney/thing/' + uglyId, requestOptions)
        //     .then(response => response.json())
        //     .then(() => window.location.reload());
    }

    // const handleChange = e => {
    //     setInput(e.target.value);
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     addStock();
    //     setInput('');
    // };

    // const checkStocks = () => {
    //     console.log("Checking Stocks: ", stocks);
    // }     { fName: "Mike", lName: "Moon", living: true, bounty: 1000000, Type: "Jedi",  _id: uuid() },

    return (
        <div className="bounty-container">
            {bounties.map(bounty => {
                return (
                    <div className="ui card">
                        <div className="header">
                            <a className="header">{bounty.fName}</a>
                            <div className="description">{bounty.living}</div>
                        </div>
                        <button onClick={() => { deleteBounty(bounty._id) }}
                            id="deleteButton">Delete
                                </button>
                        <button onClick={() => { editBounty(bounty._id) }}
                            id="editButton">Edit
                                </button>
                        <img className="image" src={bounty.imgURL} alt={bounty.lName} />
                    </div>
                )
            })}
        </div>
    )
}

export default Bounties