import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectList from '../../projectList.json';
import ProjectCards from '../../components/cards/index';

const projectBg = require("../../../src/assets/images/projectbg.jpg");
const divStyle = {
    width: '100%',
    height: '2800px',
    backgroundImage: `url(${projectBg})`,
    backgroundSize: 'cover' 
};

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Projects() {

    return (
        <section className="Project" style={divStyle}>
            <div className="project">
                <h2 className="top-title">My Projects!</h2>
                <hr></hr>
            </div>

            <Wrapper id="card-data">
                {projectList.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} tools={project.tools} />
                ))}
            </Wrapper>
        </section>

    );
}

export default Projects;