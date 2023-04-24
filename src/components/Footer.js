import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap'
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { StyledUrContent } from "./StyledUr";
import { Facebook,Twitter,Linked,Email,Location,Call } from "../Constants/icons"
const Footer = () =>{
    return(
        <div>
            
            <Container className="footer-container" fluid>
            <div className="footer-background-overlay"></div>
            <div className="footer-inner-content">
            <Row className="footer-contact" >
                              <Col >
                    <h1> Get <StyledUrContent texts='in'/> touch</h1>
                    <p><span className="footer-contact-icons"><LocationOnIcon sx={{fontSize:30}} /></span>Suite 301E | Bethlehem Plaza, Megenagna, Addis Ababa, Ethiopia</p>
                    <p><span className="footer-contact-icons"><CallIcon  sx={{fontSize:30}} /></span> +2519 42 07 07 07 | +2511 16 67 47 67</p>
                    <p><span className="footer-contact-icons"><EmailIcon  sx={{fontSize:30}} /></span> info@yes.et | employ@yes.et | apply@yes.et</p>
                </Col>
                <Col>
                    <Row className="footer-contact-yes" xs="auto">
                        <Row>
                        <Col className="footer-contact-yes-col">
                            <h2 className="footer-contact-h3">For Employers</h2>
                            <p>Find a Job</p>
                            <p>Build Resume</p>
                            <p>Upload Resume</p>
                            <p>My YES</p>
                        </Col>
                        <Col className="footer-contact-yes-col">
                        <h3 className="footer-contact-h3">For Job Seekers</h3>
                        <p>Post Job</p>
                        <p>Submit Job Order</p>
                        <p>Our Services</p>
                        <p>My YES</p>
                        </Col>
                        </Row>
                        <Col>
                        <ul>
                            <li><a href='https://www.facebook.com/youremploymentsolutionsethiopia/' target='_blank'><Facebook/></a></li>
                            <li><a href='https://twitter.com/yesethiopia' target='_blank'><Twitter/></a></li>
                            <li><a href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10353818%3Ftrk%3Dprof-exp-company-name' target='_blank'><Linked/></a></li>
                            <li><a href='mailto:info@yes.et'><Email/></a></li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
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
export default Footer