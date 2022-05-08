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
            <div className='About' >
                <div>
                    <p>
                        I have lived in many states over the years since graduating high school in 1996. I started out working as a
                        horseback wrangler to property management and pretty much everything inbetween.
                        I recently moved back to my home state of Utah and decided to pursue an education with the U of U web
                        developer boot camp course. I am super excited about this new adventure and look forward
                        to becoming a successful web developer one day!
                    </p>
                    <div className='aboutPic'>
                    <img src={photo} style={{borderRadius:'150px', width: '300px'}} alt="Joshua Pace"/>
                    </div>
                </div>
            </div>
        </div>
    );
}