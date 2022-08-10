import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/about.css';
import photo from '../../../src/assets/images/aboutpic.jpg';

const aboutBg = require("../../../src/assets/images/aboutbg.jpg");
const divStyle = {
    height: '823px',
    width: '100%',
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: 'cover'
};

export default function About() {
    return (
        <Container fluid className='background' style={divStyle} >
            <div>
                <Row className='about'>
                    <Col sm={8} className='aboutContent'>
                        <h1>
                        Full stack developer from The University of Utah bootcamp, applying tools of the trade CSS, HTML and Javascript. 
                        Combined with years of successful job performance using effective communication within team settings to solve problems equals “ME”. 
                        A creative candidate dedicated to coding best practices, aiming for perfection and helping to make the world a better place with web applications.
                        </h1>
                    </Col>
                        <Col sm={4} className='aboutPic'>
                        <img src={photo} style={{borderRadius: '25px'}} alt="Joshua Pace"/>
                        </Col>
                </Row>
            </div>
        </Container>
    );
}