import React from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import ToggledContent from './ToggledContent'
import Footer from './Footer'
import Navigation from './Navigation'
import messageImage from '../images/Message-1.svg'
import { Helmet } from "react-helmet-async"
const FAQ =()=> {
  return (
        <>
        <Helmet>
                <title>FAQ YES | Empowering Ethiopian Business & Job Seekers</title>
                <meta name="description" content="View Frequently Asked Questions About Yes"/>
            </Helmet>
        <Navigation/>
            <Container>
                <Row className='faq-container-title'>
                <img src={messageImage} style={{width:'70px'}} width={70} alt='message-icon'/>
                <h1>Frequently Asked Questions</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={3} className='faq-order'>
                            <ul>
                                <li>
                                    FAQ
                                </li>
                                <li>
                                    Service
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                    </Col>
                    <Col className='faq-toggled-content'>
             
                        <Row>
                            <h1>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
                            <div className='faq-toggled-items'>
                                <ToggledContent 
                                    btnText='What services does YES offer?'
                                    paragraph="YES offers a wide range of HR solutions including employee recruitment, payroll management, outsourcing, executive search, and training"
                                />
                                <ToggledContent 
                                    btnText='What industries does YES work with?'
                                    paragraph="YES works with clients in a variety of industries such as manufacturing, engineering, HR management, sales & marketing, etc."
                                />
                                <ToggledContent 
                                    btnText="What is YES's recruitment process?"
                                    paragraph="YES's recruitment process includes job advertising, candidate sourcing, applicant screening, interviewing, assessment & background checks, and negotiation."
                                />
                                <ToggledContent 
                                    btnText='Does YES offer HR outsourcing services?'
                                    paragraph="YES offers comprehensive HR outsourcing services, including employment contracts, compliance, HRIS, payroll & pensions, and benefits administration."
                                />
                            </div>
                        </Row>
                        <Row>
                            <h1>SERVICES</h1>
                            <div className='faq-toggled-items'>
                                <ToggledContent 
                                    btnText='Does YES offer executive search services?'
                                    paragraph="YES provides executive search services to help clients find the right leaders for their organization."
                                />
                                <ToggledContent 
                                    btnText='Does YES offer pre-employment assessments and background checks?'
                                    paragraph="YES offers pre-employment assessments and background checks to help clients make informed hiring decisions. This includes content/copywriting tests, computer proficiency tests, accounting tests, criminal history checks, prior employment verification, education verification, professional license & certificate verification, social media & internet checks, and reference checks."
                                />
                                <ToggledContent 
                                    btnText="What is YES's mission and vision?"
                                    paragraph="YES's mission is to bridge the gap between organizations and people who will shape our future communities with excellence, integrity, and respect at its core. The vision is to be the top HR service company in Ethiopia and the bridge between growing companies and growing minds for the future benefit of local communities."
                                />
                                <ToggledContent 
                                    btnText='How can YES help my organization find top talent?'
                                    paragraph="YES offers comprehensive staffing solutions designed to streamline the recruitment process and help clients find the ideal candidate faster. With YES's expertise and innovative approaches, clients can benefit from a more efficient and effective hiring process."
                                />
                                <ToggledContent 
                                    btnText='How can YES help my organization stay compliant with employment regulations?'
                                    paragraph="YES's HR outsourcing and payroll management services ensure clients are in full compliance with employment regulations while minimizing distractions from growing their business. With YES's comprehensive suite of offerings, clients can enjoy peace of mind knowing that their HR needs are being handled professionally and efficiently."
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
             <Footer/>
        </>
  )
}
export default FAQ
