import React from 'react';
import './Details.css';

const Details = props => {
    const {totalTime, breakTime} = props;
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className='time'>
                <h4>Exercise Time</h4>
                <h5>200 seconds</h5>
            </div>
            <div className='time'>
                <h4>Break Time</h4>
                <h5>50 seconds</h5>
            </div>
        </div>
    );
};

export default Details;