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
                <div className='about'>
                    <div className='aboutContent'>
                        <h1>
                        Full stack developer from The University of Utah bootcamp, applying tools of the trade CSS, HTML and Javascript. 
                        Combined with years of successful job performance using effective communication within team settings to solve problems equals “ME”. 
                        A creative candidate dedicated to coding best practices, aiming for perfection and helping to make the world a better place with web applications.
                        </h1>
                    </div>
                        <div className='aboutPic'>
                        <img src={photo} style={{borderRadius: '25px'}} alt="Joshua Pace"/>
                        </div>
                </div>
            </div>
        </div>
    );
}