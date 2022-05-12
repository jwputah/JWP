import React from 'react';
import TypeAnimation from 'react-type-animation';
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
                    <TypeAnimation
                        cursor={false}
                        sequence={['I have lived in many states and worked in many different fields of employment. From horseback wrangler to property management and pretty much everything in-between. I recently moved back to my home state of Utah and pursuing an education with the U of U web developer boot camp course. I am super excited about this new adventure and look forward to becoming a successful web developer one day!']}
                        wrapper='h3'
                        repeat={1} />
                    </div>

                        <div className='aboutPic'>
                        <img src={photo} style={{borderRadius:'140px', width: '300px', paddingTop:'100px', marginRight:'200px'}} alt="Joshua Pace"/>
                        </div>
                </div>
            </div>
        </div>
    );
}