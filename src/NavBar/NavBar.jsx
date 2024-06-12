import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import Resume from './../Kritik Jambusariya 2.0.pdf'
import { Link } from 'react-router-dom'
function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href='/'><h2 className='nav-heading'><FontAwesomeIcon className='logos' icon={faHome} /></h2></Navbar.Brand>
                        <Navbar.Brand><h2 className='nav-heading'>{props.title}</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="More Info" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to='/education' className='prj-links'>Education</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/work' className='prj-links'>Work Experience</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/projects' className='prj-links'>Projects</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href={Resume}>
                                Download Resume
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.linkedin.com/in/kritik-jambusariya-b63162206/" target='_blank'><FontAwesomeIcon className='logos' icon={faLinkedin} /></Nav.Link>
                            <Nav.Link href="https://github.com/Kritik69"><FontAwesomeIcon className='logos' icon={faGithub} /></Nav.Link>
                            <Nav.Link href="mailto:kritikjambusariya@gmail.com"><FontAwesomeIcon className='logos' icon={faMailBulk} /></Nav.Link>
                            <Nav.Link href="tel:+917350052692"><FontAwesomeIcon className='logos' icon={faPhone} /></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
  )
}

export default NavBar