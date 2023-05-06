import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h3 id='title'>Add a break</h3>
            <div className='btn'>
                <button className='btn-sec'>10s</button>
                <button className='btn-sec'>20s</button>
                <button className='btn-sec'>30s</button>
                <button className='btn-sec'>40s</button>
                <button className='btn-sec'>50s</button>
            </div>
        </div>
    );
};

export default Break;