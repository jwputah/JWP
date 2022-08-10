import React from 'react';
import '../../assets/css/resume.css';

const resumeBg = require("../../../src/assets/images/resumebg.gif");
const divStyle = {
    width: '100%',
    height: '823px',
    backgroundImage: `url(${resumeBg})`,
    backgroundSize: 'cover'
};

export default function Resume() {
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col'>
                    <h1 style={{
                        textAlign: "center",
                        color: "rgba(35,55,118,255)",
                        paddingTop: "25px"
                    }}>Click Here For Resume</h1>

                    <div style={{
                        textAlign: "center",
                    }}>
                        <a href="https://docs.google.com/document/d/1DNCw8EnKCy6zX2FNBht4MkKdMegIeoDuWSWuMklixkM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/ios-filled/50/000000/open-resume.png" alt="Resume" className="icon" /></a>
                    </div>
                </div>
            </div>
            <div className='resume' style={divStyle}></div>
        </div>
    );
}