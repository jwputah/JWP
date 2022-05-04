import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col">
                        <h1 style={{
                        textAlign: "left"
                        }}>
                        <a href="https://github.com/jwputah">
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" />
                            </a>
                        </h1>
                    </div>

                    <div class="col">
                        <h1 style={{
                        color: "green",
                        textAlign: "center"
                        }}>Joshua W Pace</h1>
                    </div>

                    <div class="col">
                        <h1 style={{
                        textAlign: "right"
                        }}>
                        <a href="mailto:jwputah7@gmail.com">
                            <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" width="38" alt="Email from freepnglogos.com" className="icon" />
                            </a>
                        </h1>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;