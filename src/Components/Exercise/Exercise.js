import React from 'react';
import './Exercise.css'

const Exercise = props => {
    const {img,name,time,age} = props.exercise;
    return (
        <div className='exercise'>
            <img className='card-img' src={img} alt="Dumble" />
            <h1>{name}</h1>
            <div className='exercise-info'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, fuga totam tempora at labore commodi?</p>
                <h4 className='bolded'>For Age: {age}</h4>
                <h4 className='bolded'>Time required: {time}s</h4>
            </div>
            <button>Add to list</button>
        </div>
    );
};

export default Exercise;