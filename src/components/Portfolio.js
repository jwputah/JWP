import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
        return <Project />;
      }
      if (currentPage === 'Home') {
        return <Home />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}