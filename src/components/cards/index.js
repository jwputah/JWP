import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/index.css';

// Individual Cards 
function ProjectCards(props) {
    return (
        <div className="card">
                <img className="card-img-top" alt={props.name} src={props.image} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
                <div className="list-group list-group-flush">
                <div className="tools">{props.tools}</div>
                </div>
            <div className="card-body">
                <a href={props.github} target="_blank" rel="noopener noreferrer"><img className="project-icon" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub Repo" /></a>
                <a href={props.deploy} target="_blank" rel="noopener noreferrer"><img className="project-icon" src="https://img.icons8.com/ios-filled/50/000000/link--v1.png" alt="Live Application" /></a>
            </div>
        </div>
    );
}

export default ProjectCards;