import React from 'react';
import './App.css';
import FrontImage from './Images/frontImg.jpg';
import BackImg from './Images/backImg.jpg';
import FormContent from "./component/FormContent";

function App() {
    return (
        <div className="container">
            <input type="checkbox" id="flip" />
            <div className="cover">
                <div className="front">
                    <img src={FrontImage} alt="" />
                </div>
                <div className="back">
                    <img className="backImg" src={BackImg} alt="" />
                </div>
            </div>
            <div className="forms">
                <FormContent />
            </div>
        </div>
    );
}

export default App;
