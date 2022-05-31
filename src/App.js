import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Solution from './components/Solutions';
import Footer from './components/Footer';


const App = () => {
    const [exerciseList, setExerciseList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [exerciseNumber, setExerciseNumber] = useState(null);

    const getData = async () => {
        await fetch("http://127.0.0.1:3003/data/data.json")
            .then(data => data.json())
            .then(data => {
                setExerciseList(data);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    const handleOnChange = (value, module) => {
        const list = exerciseList[module];
        const obj = list[value];
        setExerciseNumber(obj);
    };
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h1>Final Project</h1>
                <h3>Course: GJP100</h3>
                <p>Spring semester 2022</p>
            </div>
            {isLoading
                ? "Data is loading ..."
                : <Navigation
                    exerciseList={exerciseList}
                    handleOnChange={handleOnChange}
                />
            }
            {exerciseNumber
                ? <Solution exercise={exerciseNumber} />
                : null
            }
            <Footer />
        </div>
    );
};

export default App;
