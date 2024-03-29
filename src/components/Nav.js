import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/nav.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {

    return (
        <Navbar style={{ backgroundColor: "#293a68" }}>
            <div>
                <div className="topnav">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </Navbar>
    );
}

export default Nav;
