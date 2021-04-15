import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounties from "./Bounties";
import "./styles.css";


function Form(props) {
    const [bounties, setBounties] = useState([]);
    const [bountyAction, setBountyAction] = useState ("Add Bounty");
    const [input, setInput] = useState(
        {
            fName: props.fName || '',
            lName: '',
            living: true,
            bounty: 0,
            type: '',
            imgURL: '',
            _id: ''
        }

    );
    const [showError, setError] = useState(false);

    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    
    const handleChange = e => {
        const { name, value } = e.target;
        setInput(prevInputs => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (bountyAction === "Add Bounty") addBounty(input);
        else (patchBounty(input._id));
        setInput('');
        setBountyAction("Add Bounty");
    };

    const addBounty = (newBounty) => {
        try {
            console.log("ABOUT TO ADD A BOUNTY ", newBounty)
            axios.post("/bounties", newBounty)
                .then(res => { setBounties(prevBounties => [...prevBounties, res.data]) })
        } catch (error) {
            console.log(error)
        }
    };


    const editBounty = (bountyId) => {
        setBountyAction("Edit Bounty");
        const editB = bounties.find(bounty => bounty._id === bountyId);
        setInput(editB);
    }

    const patchBounty = (bountyId) => {
        console.log("ABOUT TO edit A BOUNTY ", input, " id= ", bountyId)
        addBounty(input);
        deleteBounty(bountyId);
    }
    const deleteBounty = (bountyId) => {
        console.log("Deleting: ", bountyId);
        const removedArr = [...bounties].filter(bounty => bounty._id !== bountyId);
        setBounties(removedArr);
    }

    return (
        <div className="container">
            <div className="ui form error">
                <div className="field">Enter a bounty below</div>
                <div className="fields">
                    <input
                        type="text" required
                        placeholder='First Name'
                        value={input.fName}
                        onChange={handleChange}
                        name='fName'
                        className='stock-input'
                    />
                    <input
                        type="text" required
                        placeholder='Last Name'
                        value={input.lName}
                        onChange={handleChange}
                        name='lName'
                        className='stock-input'
                    />
                    <input
                        placeholder='Bounty amount'
                        value={input.bounty}
                        onChange={handleChange}
                        name='bounty'
                        className='stock-input'
                    />
                    <input
                        placeholder='Bounty Type'
                        value={input.type}
                        onChange={handleChange}
                        name='type'
                        className='stock-input'
                    />
                    <input
                        placeholder='Image URL'
                        value={input.imgURL}
                        onChange={handleChange}
                        name='imgURL'
                        className='stock-input'
                    />
                </div>
                <div className="ui error message">
                    {showError && <p>Invalid symbol, please enter a valid symbol (e.g. AAPL)</p>}
                </div>
                <div onClick={handleSubmit} className="ui submit button"> {bountyAction} </div>
            </div>
            <Bounties
                bounties={bounties}
                editBounty={editBounty}
                deleteBounty={deleteBounty}
            />
        </div>
    )
}

export default Form
