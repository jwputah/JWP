import React from 'react';
import TypeAnimation from 'react-type-animation';
import '../../assets/css/home.css';

const homeBg = require("../../../src/assets/images/homebg.jpg");
const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover'
};

export default function Home() {
    return (
        <div className='Home' style={divStyle}>
            <div className='type' style={{ width: '121em', textAlign: 'center' }}>
                <TypeAnimation
                cursor={true}
                sequence={['Welcome to my Portfolio!', 1500,'Welcome']}
                wrapper='h1'
                repeat={2} />
            </div>
            <h2>
                Joshua W Pace
            </h2>
            <p>
                lorem imposum
            </p>
        </div>
    );
}