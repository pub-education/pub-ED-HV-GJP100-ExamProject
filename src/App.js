import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Solution from './components/Solutions';


const App = () => {
    const [exerciseList, setExerciseList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [exerciseNumber, setExerciseNumber] = useState(null);
    const [module,] = useState("module_1");
    const getData = async () => {
        await fetch("http://127.0.0.1:3003/data/data.json")
            .then(data => data.json())
            .then(data => {
                //console.log("data", data);
                setExerciseList(data);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    const handleOnChange = (value) => {
        const list = exerciseList[module];
        const obj = list[value];
        setExerciseNumber(obj);
    };
    return (
        <div className="page-wrapper">
            {isLoading
                ? "Data is loading ..."
                : <Navigation
                    exerciseList={exerciseList[module]}
                    handleOnChange={handleOnChange}
                />
            }
            {exerciseNumber
                ? <Solution exercise={exerciseNumber} />
                : null
            }
        </div>
    );
};

export default App;