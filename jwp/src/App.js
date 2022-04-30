
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from "./components/Project";

function App() {
  const [categories] = useState([
    { name: 'Project', description: 'A collection of my projects' },
    { name: 'Resume', description: 'Joshua W Pace Resume' },
    { name: 'Contact', description: 'Joshua W Pace contact info' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Project></Project>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
