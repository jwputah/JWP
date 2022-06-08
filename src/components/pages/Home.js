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
            <div className='type' style={{ width: '121em', textAlign: 'center', fontSize:'75px' }}>
                <TypeAnimation
                cursor={true}
                sequence={['Welcome to my Portfolio!', 1500,'Welcome']}
                wrapper='h2'
                repeat={1} />
            </div>
            <h2>
                My name is Joshua Pace
            </h2>
            <p>
                Recently graduated U of U Coding Bootcamp. Excited to start my next adventure, aquiring more coding skills and knowledge along the way.
                The sky is not the limit!
            </p>
            <p>
                "... there is no shame in not knowing. The problem arises when irrational thought and attendant behavior fill the vacuum left by ignorance."
            </p>
            <p style={{textAlign:'right', fontSize:'20px', marginRight:'20px'}}>- Neil deGrasse Tyson. The Sky Is Not the Limit: Adventures of an Urban Astrophysicist.</p>
        </div>
    );
}