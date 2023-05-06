import React from 'react';
import './Exercise.css'

const Exercise = props => {
    const {picture,name,time,age} = props.exercise;
    return (
        <div style={{backgroundColor: "bisque"}}>
            <img className='card-img' src={picture} alt="Dumble" />
            <h1>{name}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, fuga totam tempora at labore commodi?</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
        </div>
    );
};

export default Exercise;