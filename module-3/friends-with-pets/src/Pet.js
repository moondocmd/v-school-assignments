import React from 'react'

const Pet = props => {
    return (
        <div>
            <li>{props.name}, who is a {props.breed}</li>
        </div>
    )
}

export default Pet;