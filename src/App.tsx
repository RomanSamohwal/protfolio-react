import React from 'react';
import './App.css';
import {Promo} from "./components/promo/Promo";
import {About} from "./components/about/About";
import {Resume} from "./components/resume/Resume";
import {Experience} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Price} from "./components/price/Price";

function App() {
    return <>
        <Promo/>
        <About/>
        <Resume/>
        <Experience/>
        <Portfolio/>
        <Price/>
    </>
}

export default App;
