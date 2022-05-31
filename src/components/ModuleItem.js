import React from 'react';

const Moduleitem = ({ item, checked, handleOnChange }) => {

    return (
        <div className="module-item">
            <input
                type="radio"
                id={item}
                name="module"
                value={item}
                defaultChecked={checked}
                onClick={ev => handleOnChange(ev.target.value)}
            />
            <label htmlFor={item}>{item}</label>
        </div>
    );
};

export default Moduleitem;