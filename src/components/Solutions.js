import React from 'react';

export default ({ exercise }) => {

    const query = exercise.question;
    const code = exercise.code;
    const html = exercise.html.replace(/#code/, code);
    return (
        <div className="exercise-wrapper">
            <div>
                <label>Assignment:</label><br />
                <div className="textarea" >{query}</div>
            </div>
            <div className="code">
                <label>Solution:</label><br />
                <textarea readOnly value={code}></textarea>
            </div>
            <div className="frame">
                <label>Output from Script:</label><br />
                <iframe srcDoc={html} ></iframe>
            </div>
        </div>
    );
};