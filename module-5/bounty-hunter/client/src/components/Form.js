import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounties from "./Bounties";
import "./styles.css";


function Form() {
    const [bounties, setBounties] = useState([]);
    const [input, setInput] = useState('');
    const [showError, setError] = useState(false);

    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addBounty(input);
        setInput('');
    };

    // const refreshStocks = () => {
    // }

    const addBounty = (newBounty) => {
        try {
            console.log("ABOUT TO ADD A BOUNTY ", newBounty)
            axios.post("/bounties", newBounty)
            .then (res => console.log(res))
        } catch (error) {
            console.log(error)
        }

    };


    return (

        <div className="container">
            <div className="ui form error">
                <div className="field">Enter a bounty below</div>
                <input
                    placeholder='Enter bounty here'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='stock-input'
                />
                <div className="ui error message">
                    {showError && <p>Invalid symbol, please enter a valid symbol (e.g. AAPL)</p>}
                </div>
                <div onClick={handleSubmit} className="ui submit button">Add Bounty</div>
                {/* <div onClick={refreshStocks} className="ui submit button">Refresh</div> */}
            </div>
            <Bounties
            // stocks={stocks}
            // removeStock={removeStock}
                // removeBount={removeBounty}
            />
        </div>
    )
}

export default Form
