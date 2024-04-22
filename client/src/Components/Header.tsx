import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container'>
      <Navbar bg="light" expand="lg" expanded={expanded}>
        {/* Replace Navbar.Brand with Image component */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={'/logo_alt2.png'}
            width="140"
            className="d-inline-block align-top"
            alt="STUGGEN"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'show' : ''}`}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={toggleExpanded}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Valborg" onClick={toggleExpanded}>Valborg</Nav.Link>
            {/* Add more Nav.Link components for additional menu items */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
