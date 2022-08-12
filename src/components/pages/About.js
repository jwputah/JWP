import React from 'react';
import '../../assets/css/about.css';
import photo from '../../../src/assets/images/aboutpic.jpg';

const aboutBg = require("../../../src/assets/images/aboutbg.jpg");
const divStyle = {
    height: '1200px',
    width: '100%',
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: 'cover'
};

export default function About() {
    return (
        <div style={divStyle} >
            <div>
                <div>
                    <div className='aboutContent'>
                        <h1>
                        Full stack developer with certificate from the University of Utah web developer boot camp. 
                        I have 100+ hours of experience applying tools of the trade CSS, HTML and JavaScript, 
                        individually and in teams developing full stack applications. Combined with years of successful 
                        job performance using effective communication within team settings to solve problems make me 
                        a valuable asset on any project. A creative candidate dedicated to coding best practices, 
                        aiming for perfection <br></br>and helping to make the world a better place with web applications.
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