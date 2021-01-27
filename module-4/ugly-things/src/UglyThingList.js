import React, { Component } from "react"
import { UglyContextConsumer } from "./uglyContext"

const UglyThingList = (props) => {
    return (
        <UglyContextConsumer>
            {({ uglyList, deleteUgly, editUgly }) => (
                <div className="ugly-container">
                    {uglyList.map((u) => {
                        return (
                            <div className="ui card">
                                <div className="header">
                                    <a className="headre">{u.title}</a>
                                    <div className="description">{u.description}</div>
                                </div>
                                <button onClick={() => { deleteUgly(u._id) }}
                                    id="deleteButton">Delete
                                </button>
                                <button onClick={() => { editUgly(u._id) }}
                                    id="editButton">Edit
                                </button>
                                <img className="image" src={u.imgUrl} alt={u.title} />
                            </div>
                        )
                    })}
                </div>
            )}
        </UglyContextConsumer >
    )
}
export default UglyThingList