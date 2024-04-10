import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const headerStyle = {
        fontSize: '2rem' // Adjust the font size here as needed
    };

    return (
        <div className='container'>
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Navbar.Brand as={Link} to="/" style={headerStyle}>STUGGEN</Navbar.Brand>
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
}

export default Header;
