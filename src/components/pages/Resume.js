import React from 'react';

const resumeBg = require("../../../src/assets/images/resumebg.gif");
const divStyle = {
    width: '100%',
    height: '825px',
    backgroundImage: `url(${resumeBg})`,
    backgroundSize: 'cover'
};

export default function Resume() {
    return (
        <div className='Resume' style={divStyle}>
            <div className='row justify-content-center'>
                <div className='col'>
                    <h1 style={{
                        textAlign: "center",
                        color: "rgba(35,55,118,255)",
                        paddingTop: "25px"
                    }}>Resume</h1>
                    
                    <div style={{
                        textAlign: "center",
                    }}>
                    <a href="https://github.com/jwputah">
                    <img src="https://img.icons8.com/ios-filled/50/000000/open-resume.png" alt="Resume" className="icon" />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}