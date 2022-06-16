import React from 'react';
import TypeAnimation from 'react-type-animation';
import '../../assets/css/home.css';
// import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

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
            {/* <Fab
                position={{ left: 0 }}
                mainButtonStyles={{ backgroundColor: '#3498db', width: 55, borderRadius: 48 }}
                actionButtonStyles={{ backgroundColor: '#3498db', width: 35, borderRadius: 28 }}
                icon='i'
                alwaysShowTitle={true}
                text="Links"
            >
                <Action
                    text="Email"
                    onClick={() => window.open('mailto:jwputah7@gmail.com')}
                />
                <Action
                    text="Github"
                    onClick={() => window.open('https://github.com/jwputah/')}
                />
                <Action
                    text="LinkedIn"
                    onClick={() => window.open('https://www.linkedin.com/in/joshua-pace-7200aa227?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3Nv7vwBqSNKKvsm3skxhSg%3D%3D')}
                />
            </Fab> */}
            <div className='type' style={{ width: '121em', fontSize: '75px' }}>
                <TypeAnimation
                    cursor={true}
                    sequence={['Welcome to my Portfolio!', 1500, 'Welcome', 2000, 'My name is Joshua Pace']}
                    wrapper='h2'
                    repeat={1} />
            </div>

            <div>
                <div>
                    <div>
                        <p>
                            "... there is no shame in not knowing. The problem arises when irrational thought and attendant behavior fill the vacuum left by ignorance."
                        </p>
                        <p style={{ textAlign: 'right', fontSize: '20px', marginRight: '20px' }}>- Neil deGrasse Tyson. The Sky Is Not the Limit: Adventures of an Urban Astrophysicist.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}