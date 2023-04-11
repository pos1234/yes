import React from "react"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Facebook,Twitter,Linked,Email,Location,Call } from "../Constants/icons"
const Footer = () =>{
    return(
        <div>
            <Container fluid>
            <Row className="footer-contact" xs="auto">
                <Col >
                    <h1>Get <span className='underlined underline-clip'>in</span> touch</h1>
                    <span ><Location className="footer-contact-icons"/></span><p>Suite 301E | Bethlehem Plaza, Megenagna, Addis Ababa, Ethiopia</p>
                    <p><span className="footer-contact-icons"><Call/></span> +2519 42 07 07 07 | +2511 16 67 47 67</p>
                    <p><span className="footer-contact-icons"><Email/></span> info@yes.et | jobs@yes.et | employ@yes.et |</p>
                </Col>
                <Col>
                    <Row className="footer-contact-yes" xs="auto">
                        <Row>
                        <Col className="footer-contact-yes-col">
                            <h3 className="footer-contact-h3">For Employers</h3>
                            <p>Find a Job</p>
                            <p>Build Resume</p>
                            <p>Upload Resume</p>
                            <p>My YES</p>
                        </Col>
                        <Col >
                        <h3 className="footer-contact-h3">Fot Job Seekers</h3>
                        <p>Post Job</p>
                        <p>Submit Job Order</p>
                        <p>Our Services</p>
                        <p>My YES</p>
                        </Col>
                        </Row>
                        <Col>
                        <ul>
                            <li><Facebook/></li>
                            <li><Twitter/></li>
                            <li><Linked/></li>
                            <li><Email/></li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="footer-contact-term" xs="auto">
                <Col>
                    <p className="silver-paragraph">©2023 YES Your Employment Solution.</p>
                </Col>
                <Col>
                    <p className="silver-paragraph">Terms and Conditions | Privacy Policy</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
const open = ()=>{
    const TheParagraph = document.getElementsByClassName('view-paragraph');
    TheParagraph.classList.toggle('showtext');
    console.log(TheParagraph);
}
export default Footer