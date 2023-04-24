import React from 'react'
import logo from '../images/yes-logo.svg'
import {Row, Dropdown, Col,Form, Navbar, Nav, Button, Container,Offcanvas} from 'react-bootstrap'
const NavbarJobs =()=> {
    const expand='md';
  return (
    <Navbar key={expand} bg="light" expand={expand}>
    <Container className='job-navigation' fluid>
      <Navbar.Brand href="#" ><img className='logo-navbar' src={logo} alt='yes-logo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-left flex-grow-1 pe-3 links">
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Client</Nav.Link>   
            <Nav.Link href="#action2">Find A Job</Nav.Link>   
            <Nav.Link href="#action2">Products</Nav.Link>   
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">FAQ</Nav.Link>   
            <Nav.Link href="#action2">Get in Touch</Nav.Link> 
          </Nav>
         
     <Row className='navbar-sign-container'>
         <Col><Button as='a' className='navbar-sign-in'>Sign In/ Sign Up</Button></Col>
         <Col><Button as='a' className='navbar-sign-in'>Post Job</Button></Col>
     </Row>
      {/* 
     <Row>
         <Col>
             <ul className='navbar-socials'>
                 <li><Facebook/></li>
                 <li><Twitter/></li>
                 <li><Linked/></li>
                 <li><Email/></li>
             </ul>
         </Col>
     </Row>
     <Row>
         <Col><p className='navbar-copy'>©2022 YES | Your Employment Solutions</p></Col>
     </Row>
  </Row> */}
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}
export default NavbarJobs