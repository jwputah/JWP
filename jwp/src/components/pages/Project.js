import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [project] = useState([
        {
            name: 'moneymaker',
            category: 'project',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'dad-a-base',
            category: 'project',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: '2doozies',
            category: 'project',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }
    ]);

    const currentProject = project.filter(project => project.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentProject.map((image, i) => (
                    <img
                        src={require(`../../assets/project/${category}/${i}.png`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;