import React from 'react';
import './Break.css'

const Break = ({secClicked}) => {
    return (
        <div>
            <h3 id='title'>Add a break</h3>
            <div className='btn'>
                <button onClick={() => secClicked(10)} id='btn-sec10'>10s</button>
                <button onClick={() => secClicked(20)} id='btn-sec20'>20s</button>
                <button onClick={() => secClicked(30)} id='btn-sec30'>30s</button>
                <button onClick={() => secClicked(40)} id='btn-sec40'>40s</button>
                <button onClick={() => secClicked(50)} id='btn-sec50'>50s</button>
            </div>
        </div>
    );
};

export default Break;