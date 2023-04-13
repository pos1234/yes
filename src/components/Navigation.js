import React from 'react'
import logo from '../images/yes-logo.svg'
import {Row, Col, Navbar, Nav, Button, Container,Offcanvas} from 'react-bootstrap'
import { Facebook,Twitter,Linked,Email} from '../Constants/icons'
export default function Navigation() {
  return (
    <Navbar key='expand' bg='' expand='expand' className='navigation'>
    <Container >
         <Navbar.Brand href="home" name="home" className='logo-image'><img src={logo} alt='brand-logo'/></Navbar.Brand>
         <Navbar.Toggle className='toggle-button' aria-controls={`offcanvasNavbarLabel-expand-${'expand'}`} >
              <span className='navbar-toggler-icon-first'></span>
              <span className='navbar-toggler-icon-second'></span>
              <span className='navbar-toggler-icon-third'></span>
         </Navbar.Toggle>
         <Navbar.Offcanvas className='offcanvas-navbar' id={`offcanvasNavbar-expand-${'expand'}`}
         aria-labelledby={`offcanvasNavbarLabel-expand-${'expand'}`}
         placement="end">
         <Offcanvas.Header closeButton  className='closeButton'>
         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'expand'}`}>
                 <img src={logo} alt='brand-logo-navbar' className='logo-navbar'/>
             </Offcanvas.Title>
         </Offcanvas.Header> 
         <Offcanvas.Body>
         <Nav className="justify-content-end flex-grow-1 pe-3 navbar-navs">
         <Nav.Link href="#action1">About</Nav.Link>
         <Nav.Link href="#action2">Client</Nav.Link>   
         <Nav.Link href="#action2">Find A Job</Nav.Link>   
         <Nav.Link href="#action2">Products</Nav.Link>   
         <Nav.Link href="#action2">Blog</Nav.Link>
         <Nav.Link href="#action2">FAQ</Nav.Link>   
         <Nav.Link href="#action2">Get in Touch</Nav.Link>   
          </Nav> 

          <Row>
             <Row>
                 <Col><Button as='a' id='navbar-sign-in'>Sign In/ Sign Up</Button></Col>
             </Row>
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
          </Row>
         </Offcanvas.Body>
         </Navbar.Offcanvas>
     </Container>
 </Navbar>
  )
}
