import React from 'react'
import "./styles.css";


const Bounties = ({ bounties, deleteBounty, editBounty }) => {
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