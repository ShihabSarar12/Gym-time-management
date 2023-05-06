import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() =>{
        fetch('Data.json')
        .then(response => response.json())
        .then(exercise => setExercises(exercise))
        .catch(error => console.error(error));
    },[]);
    return (
        <div>
            <h2>Ultra-Active-Club</h2>
            <p>Select today's exercise</p>
            <div>
                {
                    exercises.map(exercise =><Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;