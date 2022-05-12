import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="container mw-100">
                <div className="row justify-content-end">
                    <div className="col">
                        <h1 style={{
                        textAlign: "left",
                        marginLeft: '400px'
                        }}>
                        <a href="https://github.com/jwputah">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="Github icon from icons8.com" className="icon" />
                            </a>
                        </h1>
                    </div>

                    <div className="col">
                        <h1 style={{
                        color: "white",
                        textAlign: "center",
                        textDecoration: "bold"
                        }}>Joshua W Pace</h1>
                    </div>

                    <div className="col">
                        <h1 style={{
                        textAlign: "right",
                        marginRight: '400px'
                        }}>
                        <a href="mailto:jwputah7@gmail.com">
                        <img src="https://img.icons8.com/ios-filled/50/000000/email-sign.png" width="38" alt="Email icon from icons8.com" className="icon" />
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;