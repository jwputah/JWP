import React from "react";
import photo from "../../assets/moneymaker.png";

function Project(props) {
    const currentCategory = {
        name: "Project",
        description: "Image and link to project"
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Project"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}
export default Project;