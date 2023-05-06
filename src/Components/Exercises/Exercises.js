import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() =>{
        fetch('Data.json')
        .then(response => response.json())
        .then(exercise => {
            setExercises(exercise);
            console.log(exercise);
        })
        .catch(error => console.error(error));
    },[]);
    return (
        <div id='content'>
            <h2>Ultra-Active-Club</h2>
            <p>Select today's exercise</p>
            <div id='exercise-container'>
                {
                    exercises.map(exercise =><Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;