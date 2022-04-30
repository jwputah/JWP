import React from 'react';

function Nav() {
    const categories = [
        { name: "Portfolio", description: "A collection of my applications" },
        { name: "Resume", description: "Joshua W Pace's Resume" },
        { name: "Contact", description: "Joshua W Pace's contact info" }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;