import React, { useEffect, useState } from 'react';
import Navitem from './Navitem';
import Moduleitem from './ModuleItem';

export default ({ exerciseList, handleOnChange }) => {
    // console.log("Navigation exerciseList", exerciseList);
    // console.log("Navigation exerciseList.keys", Object.keys(exerciseList));
    const [module, setModule] = useState("module_1");
    const handleOC = (value) => {
        // console.log("Navigation handleOC:", value);
        handleOnChange(value, module);
    }
    const handleModuleOC = (value) => {
        setModule(value);
    }
    useEffect(() => {

    }, [module])

    const modules = Object.keys(exerciseList);
    return (
        <div className="nav">
            <div className="nav">
                {
                    modules.map((item, i) => {
                        return (
                            <>
                                <Moduleitem
                                    key={item + i}
                                    item={item}
                                    checked={module === item}
                                    handleOnChange={handleModuleOC}
                                />
                            </>
                        );

                    })
                }
            </div>

            <div className="nav">
                {
                    Object.keys(exerciseList[module]).map((item, i) => {
                        return (
                            <>
                                <Navitem
                                    key={item + i}
                                    item={item}
                                    handleOnChange={handleOC}
                                />
                            </>
                        );

                    })
                }
            </div>

        </div>
    );
};