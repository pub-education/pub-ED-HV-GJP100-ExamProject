import React from 'react';
import Navitem from './Navitem';


export default ({ exerciseList, handleOnChange }) => {
    // console.log("Navigation exerciseList", exerciseList);
    // console.log("Navigation exerciseList.keys", Object.keys(exerciseList));
    const handleOC = (value) => {
        // console.log("Navigation handleOC:", value);
        handleOnChange(value);
    }
    const items = Object.keys(exerciseList);
    return (
        <div className="nav">
            {
                items.map((item, i) => {
                    return (
                        <>
                            <Navitem
                                key={item}
                                item={item}
                                handleOnChange={handleOC}
                            />
                        </>
                    );

                })
            }
        </div>
    );
};