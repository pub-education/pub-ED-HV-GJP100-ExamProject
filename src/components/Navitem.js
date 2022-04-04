import React from 'react';

const Navitem = ({ item, handleOnChange }) => {

    return (
        <div className="nav-item">
            <input
                type="radio"
                id={item}
                name="exercise"
                value={item}
                onClick={ev => handleOnChange(ev.target.value)}
            />
            <label htmlFor={item}>{item}</label>
        </div>
    );
};

export default Navitem;