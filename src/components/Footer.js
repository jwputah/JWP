import React, { Component } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/footer.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Joshua W Pace'
        };
    }

    render() {
    return (
        <footer>
            <Fab
                position={{ left: 0 }}
                mainButtonStyles={{ backgroundColor: '#3498db', width: 55, borderRadius: 48 }}
                // actionButtonStyles={{ backgroundColor: '#3498db', width: 5, borderRadius: 28 }}
                icon='i'
                alwaysShowTitle={false}
                text="Links"
            >
                <Action text="Email" onClick={() => window.open('mailto:jwputah7@gmail.com')} >📪</Action>
                <Action text="Github" onClick={() => window.open('https://github.com/jwputah/')} >👨‍💻</Action>
                <Action text="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/joshua-pace-7200aa227?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3Nv7vwBqSNKKvsm3skxhSg%3D%3D')}
                >🔗</Action>
            </Fab>
            <div className="container mw-100">
                <div className="row justify-content-center">
                    <div className="col">
                        <h1 style={{
                            color: "white",
                            textAlign: "center",
                            textDecoration: "bold"
                        }}>{this.state.name}</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}
}

export default Footer;