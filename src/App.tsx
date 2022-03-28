import React from 'react';
import './App.css';
import {Promo} from "./components/promo/Promo";
import {About} from "./components/about/About";
import {Resume} from "./components/resume/Resume";

function App() {
    return <>
        <Promo/>
        <About/>
        <Resume/>
    </>
}

export default App;
