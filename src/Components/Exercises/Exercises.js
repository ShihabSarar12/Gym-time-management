import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = props => {
    const {addToList} = props;
    const [exercises, setExercises] = useState([]);
    useEffect(() =>{
        fetch('Data.json')
        .then(response => response.json())
        .then(exercise => setExercises(exercise))
        .catch(error => console.error(error));
    },[]);
    return (
        <div id='content'>
            <h2>Ultra-Active-Club</h2>
            <p>Select today's exercise</p>
            <div id='exercise-container'>
                {
                    exercises.map(exercise =><Exercise exercise={exercise} key={exercise.id} addToList={addToList}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;