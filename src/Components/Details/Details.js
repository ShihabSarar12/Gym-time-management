import React, { useEffect } from 'react';
import './Details.css';

const Details = props => {
    const {total} = props;
    let totalTime = 0;
    useEffect(() =>{
        totalTime = localStorage.getItem('time');
        console.log(totalTime);
    },[total]);
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className='time'>
                <h4>Exercise Time</h4>
                <h5>{totalTime} seconds</h5>
            </div>
            <div className='time'>
                <h4>Break Time</h4>
                <h5>50 seconds</h5>
            </div>
        </div>
    );
};

export default Details;