import React from 'react';

const resumeBg = require("../../../src/assets/images/resumebg.jpg");
const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${resumeBg})`,
    backgroundSize: 'cover' 
};

export default function Resume() {
    return (
        <div className='Resume' style={divStyle}>
            <h1>Resume</h1>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
        </div>
    );
}