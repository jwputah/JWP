import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/index.css';

// Individual Cards 
function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <h1 className="card-title">{props.name}</h1>
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p className="proj-icons-container">
                    <a href={props.github}><img className="project-icon" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub Repo" /></a>
                    <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" alt="Live Application" /></a>
                </p>
            </div>
            <div>
                <p className="tools">{props.tools}</p>
            </div>
        </div>
    );
}

export default ProjectCards;