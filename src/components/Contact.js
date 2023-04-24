import React,{useEffect} from 'react'
import {Row, Col,Button, Container,Form} from 'react-bootstrap'
import { Helmet } from "react-helmet-async"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {StyledUr,StyledUrContent} from './StyledUr'
import Navigation from './Navigation'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = ()=>{
    useEffect(() => {
        AOS.init({once: true});
      }, [])
    return(
        <>
         <Helmet>
                <title>Contact Us - YES</title>
                <meta name="description" content="YES - Your Employment Solution"/>
            </Helmet>
            <div className='contact-entry'>
                    <div className='contact-entry-content'>
                     <Navigation/>
                        <Row className='contact-entry-headings' data-aos="fade-up" data-aos-duration="2000">
                            <h1 className='display-1 styled-ur'>Our talent <br/>
                            is finding you <br/>
                            <StyledUr text='Talent!' /></h1>
                        </Row> 
                        <Row className='contact-icon-container'  data-aos="fade-up" data-aos-duration="2000">
                                <Col><a href='#contact-texts'>
                                    <ArrowDownwardIcon sx={{ fontSize: 50}}/>
                                </a></Col>
                            </Row>
                    </div>
                </div>
            <Container fluid className='contact-content' id='contact-texts'>
                <Row>
                    <Col className='contact-texts'>
                    <Button className='contact-button' name="contact-link-button">GET IN TOUCH</Button>
                        <h1>We’d love to hear from you. </h1>
                        <p>
                        We are here to answer any question you may have. Thank you for visiting our website. If you have questions or comments please fill out the following form and a representative from our office will contact you back.   
                        </p>
                    </Col>
                    <Col md={6}>
            <Form className='emp-can-form'>
                <h1>Send a message</h1>
                <Form.Group className="mb-4 " controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control className="text-field" type="text" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control className="mb-3 text-field" type="email"/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control className="mb-3 text-field" type="text"/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicMessage">
                    <Form.Label>Your message (optional)</Form.Label>
                    <Form.Control as='textarea' rows={10} className="mb-3 textarea" type="textarea"/>
                </Form.Group>
                <Button className='login-button' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
                </Row>
            </Container>
            <Container fluid className='mb-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4802361762663!2d38.80046660000001!3d9.0198802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8542bc946957%3A0x796ef37fcaad61dc!2sYES%20%7C%20Your%20Employment%20Solutions!5e0!3m2!1sen!2set!4v1682185038476!5m2!1sen!2set" 
            width="100%"
            height="450"
            frameBorder="0"
            style={{border:0}}
            aria-hidden="false"
            tabIndex="0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </Container>
            <Footer/>
        </>
    )
}

export default Contact