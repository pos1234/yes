import React from 'react'
import logo from '../images/yes-logo.svg'
import {Row, Col, Navbar, Nav, Button, Container,Offcanvas} from 'react-bootstrap'
import { Facebook,Twitter,Linked,Email} from '../Constants/icons'
import {Link,NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
    <Navbar key='expand' bg='' expand='expand' className='navigation'>
    <Container >
         <Navbar.Brand as={Link} to={'/'} name="home" className='logo-image'><img src={logo} alt='brand-logo'/></Navbar.Brand>
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
                <Link to={'/'}> <img   src={logo} alt='brand-logo-navbar' className='logo-navbar'/></Link>
             </Offcanvas.Title>
         </Offcanvas.Header> 
         <Offcanvas.Body>
         <Nav className="justify-content-end flex-grow-1 pe-3 navbar-navs">
         <Nav.Link as={NavLink} to={'/home/about'}>About</Nav.Link>   
         <Nav.Link as={NavLink} to={'/home/about/section'}>Client Hub</Nav.Link>   
         <Nav.Link as={NavLink} to={'/jobs'}>Find a Job</Nav.Link>   
         <Nav.Link as={NavLink} to={'/home/hris'}>Products</Nav.Link>   
         <Nav.Link as={NavLink} to={'/home/blog'}>Blog</Nav.Link>
         <Nav.Link as={NavLink} to={'/home/faq'}>FAQ</Nav.Link>   
         <Nav.Link as={NavLink} to={'/home/contact-us'}>Get in Touch</Nav.Link>   
          </Nav> 

          <Row>
             <Row>
                 <Col><Button as={Link} id='navbar-sign-in' to={'/jobs/sign-in'}>Sign In/ Sign Up</Button></Col>
             </Row>
             <Row>
                 <Col>
                     <ul className='navbar-socials'>
                         <li><a href='https://www.facebook.com/youremploymentsolutionsethiopia/' target='_blank'><Facebook/></a></li>
                         <li><a href='https://twitter.com/yesethiopia' target='_blank'><Twitter/></a></li>
                         <li><a href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10353818%3Ftrk%3Dprof-exp-company-name' target='_blank'><Linked/></a></li>
                         <li><a href='mailto:info@yes.et'><Email/></a></li>
                     </ul>
                 </Col>
             </Row>
             <Row>
                 <Col><p className='navbar-copy'>©2023 YES | Your Employment Solutions</p></Col>
             </Row>
          </Row>
         </Offcanvas.Body>
         </Navbar.Offcanvas>
     </Container>
 </Navbar>
  )
}
