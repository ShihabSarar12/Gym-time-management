import React from 'react';
import './Info.css';
import Attributes from '../Attributes/Attributes';
import Break from '../Break/Break';

const Info = ({profile,secClicked}) => {
    const {name, location, weight, height, age} = profile;
    return (
        <div>
            <div id='profile'>
                <img id='info-img' src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1" alt="" />
                <div>
                    <h2 id='name'>{name}</h2>
                    <p id='location'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id='profile-icon'>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>{location}</p>
                </div>
            </div>
            <div id='attributes'>
                <Attributes value={weight} properties="Weight"></Attributes>
                <Attributes value={height} properties="Height"></Attributes>
                <Attributes value={age} properties="Age"></Attributes>
            </div>
            <div id='break'>
                <Break secClicked={secClicked}></Break>
            </div>
        </div>
    );
};

export default Info;