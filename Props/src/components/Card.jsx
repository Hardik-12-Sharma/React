import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1764638913745-481a43753946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>View</button>
        </div>
    )
}

export default Card
