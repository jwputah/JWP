import React from 'react';
import '../../assets/css/about.css';
import photo from '../../../src/assets/images/aboutpic.jpg';

const aboutBg = require("../../../src/assets/images/aboutbg.jpg");
const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: 'cover'
};

export default function About() {
    return (
        <div style={divStyle} >
            <div>
                <div>
                    <div className='About' style={{ width: '100em', textAlign: 'left', color:'white', marginLeft:'50px', paddingTop:'50px'}}>
                        <h1>
                        Ambition driven recent full stack coding boot camp graduate. With proficiency in HTML, Javascript, CSS and React, 
                        combined with years of successful job performance using effective communication within team settings to solve problems. 
                        Equals “ME” a creative candidate dedicated to learning coding best practices. Helping to make the world a better place with web applications.
                        </h1>
                    </div>

                        <div className='aboutPic'>
                        <img src={photo} style={{borderRadius:'140px', width: '300px', paddingTop:'100px', marginRight:'200px'}} alt="Joshua Pace"/>
                        </div>
                </div>
            </div>
        </div>
    );
}