import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Bounties from "./components/Bounties.js"

function App() {
    const [bounties, setBounties] = useState([]);

    useEffect(() => {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { bounties.map(bounty => <h1>{bounty.fName}</h1>)}
        </div>
    )
}

export default App
