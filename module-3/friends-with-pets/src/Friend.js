import React from 'react'
import Pet from './Pet'


const Friend = props =>{
    const petList = props.pets.map(pet =>{
        return(<Pet name={pet.name} breed={pet.breed} />)
    })
    console.log(props)
    console.log(props.pets)
    return (
        <div className='friend'>
            <h3>I am {props.name}</h3>
            <div>My age is {props.age}</div>
            <div>My pets are: {petList}</div>
        </div>
    )
}

export default Friend;