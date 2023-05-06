import React from 'react';
import './Attributes.css'

const Attributes = props => {
    const {value, properties} = props;
    return (
        <div>
            <h2 id='value'>{value}</h2>
            <h3 id='prop'>{properties}</h3>
        </div>
    );
};

export default Attributes;