import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const root = ReactDOMClient.createRoot(document.querySelector("#root"));

root.render(<App />);

/*
import { layout } from './app.js';

const init = () => {
    document.querySelector("#root").innerHTML = layout("Set som New Text");
}

document.addEventListener("DOMContentLoaded", init());
*/
