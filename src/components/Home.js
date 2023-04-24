import React ,{useEffect}from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import {Star,Business,ArrowRight} from '../Constants/icons'
import {StyledUr,StyledUrContent} from './StyledUr'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'
import Navigation from './Navigation'
import image1 from '../images/image-1-11.avif'
import image2 from '../images/Man.svg'
import icon_image1 from '../images/icon-image-7.avif'
import icon_image2 from '../images/icon-image-8.avif'
import icon_image3 from '../images/icon-image-9.avif'
import icon_image4 from '../images/icon-image-10.avif'
import icon_image5 from '../images/icon-image-11.avif'
import icon_image6 from '../images/icon-image-12.avif'
import icon_image7 from '../images/icon-image-13.avif'
import icon_image8 from '../images/icon-image-14.avif'
import icon_image9 from '../images/cloud-svg.svg'
import icon_image10 from '../images/arrow-svg.svg'
const YourHr = (props)=>{
    return(
            <Row className='home-your-hr-lists'>
                <Col className='icon-image-container'>
                    <img alt='icon-image' src={props.imageSrc} width={40}/>
                </Col>
                <Col xm={6} className='home-hr-texts'>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <Button role='link' as={Link} to={props.To} aria-label='your HR is good' className='list-button' name='button-down-home'><ArrowRight/></Button>
                </Col>
            </Row>
    )
}
const HowHelp = (props)=>{
    return(
        <Row className='how-we-help-rows'>
            <Col className='how-we-help-image'>
                <img src={props.imageSrc} alt='how-we-help-image' width={35}/>
            </Col>
            <Col xs={11} >
                <h2>{props.title}</h2>
                <p className='silver-paragraph'>{props.content}</p>
            </Col>
        </Row>
    )
}
const Seeker = (props)=>{
    return (
        <Col className='home-seeker-lists'>
            <img src={props.imageSrc} alt='home-seeker-image' width={80}/>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Button role='link' as={Link} to={props.To} aria-label='links' className='list-button' name='link-button' ><ArrowRight/></Button>
        </Col>
    )
}

const Home = ()=>{
    useEffect(() => {
        AOS.init({once: true});
      }, [])
    return(
        
            <>
            <div className='home-container'>
                {/* Home entry */}
                <div className='home-entry' >
                    <div className='home-entry-content' >
                     <Navigation/>
                        <Row className='home-entry-headings' data-aos="fade-up" data-aos-duration="2000">
                            <h1 className='display-1 '>Right &nbsp;
                                <StyledUr text='fit!' />
                            </h1>
                            <h1 className='right-now'><span></span></h1>
                            <Row className='home-button-container'>
                                <Col><Button as='a' href='#employer' className='home-entry-button'>Find Talent <span  className='button-icons'><Star/></span></Button></Col>
                                <Col><Button as='a' href='#jobseeker'  className='home-entry-button'>Find a Job <span  className='button-icons'><Business className='button-icons'/></span></Button></Col>
                            </Row>
                        </Row> 
                    </div>
                </div>
                {/* home bridge */}
                <Container className='home-bridge' >
                     <Row data-aos="fade-up" data-aos-duration="2000">
                        <h1>We  <StyledUrContent texts='bridge' /> the gap</h1>
                    </Row>
                    <Row>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <p className='silver-paragraph'>Whether you're looking to hire or get hired let us do the searching and find you
                         the right fit while you focus on what you do best</p>
                        </Col>
                    </Row>
                    <Row className='home-bridge-box-container'>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                            <div className="scene">
                                <div className="card">
                                    <div className="face front">
                                        <Button className='bridge-button'>Employers</Button>
                                        <h2>Find Talent</h2>
                                    </div>
                                    <div class="face back">
                                    <Button as='a' href='#employer' className='bridge-button'>Submit a Job Order</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <div className="scene">
                                <div className="card">
                                    <div className="face front second-front">
                                        <Button className='bridge-button'>Job Seekers</Button>
                                        <h2>Find a Job</h2>
                                    </div>
                                    <div className="face back">
                                    <Button  as={Link} to={'/jobs'} className='bridge-button'>Browse Jobs</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                {/* Your HR */}
                <Container className='home-your-hr' id='employer'>
                    <Row>
                        <Col className='home-your-hr-content' data-aos="fade-up" data-aos-duration="2000">
                            <Button as='a' className='home-your-hr-button' href='' name='employers-button-link'>EMPLOYERS</Button>
                            <h1>Your HR <StyledUrContent texts='one-stop-shop'/></h1>
                            <p className='home-hr-p silver-paragraph'>Need the perfect addition to your team? Search no more! YES has got you covered - with just a few clicks, we connect employers and employees together like peanut butter & jelly. So why wait? Get tapping today – it's time for greatness!</p>
                            <div className='home-your-hr-content-lists'>
                            <YourHr imageSrc={icon_image1}
                             title='Find Talent'
                             content='Hiring made easy! Let us do the hard work for you by finding top talent for your open positions.'
                             To='findtalent'/>
                            <YourHr imageSrc={icon_image2}
                            title='Post a Job'
                            content='Click, Post, Hire'
                            To='/jobs/sign-in'/>
                            <YourHr imageSrc={icon_image3}
                            title='Our Services'
                            content='Find out more about all our HR solutions'
                            To='/home/about/'/>
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-duration="2000" className='home-your-hr-side-image' sm={12} lg={6}>
                            <img src={image1} alt='home-side-image' width={440}/>
                        </Col>
                    </Row>
                </Container>
                {/* how we help */}
                <Container fluid className='home-how-help'>
                    <div className='home-how-help-center'>
                    <Button as='a' className='home-how-help-button' href='' name='home-how-help-link-button' data-aos="fade-up" data-aos-duration="2000">EMPLOYERS</Button>
                    <Row data-aos="fade-up" data-aos-duration="2000">
                        <h1>How we help you</h1>
                    </Row>
                    <Row data-aos="fade-up" data-aos-duration="2000">
                        <Col>
                        <p className='silver-paragraph'>Our specialist recruiters use state-of the-art technology with in-depth labour market and industry knowledge that cover every 
                            stage of the talent acquisition and engagement process to find you the right fit. </p>
                        </Col>
                    </Row>
                    </div>
                    <Row className='how-help-boxes-container'>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                            <HowHelp imageSrc={icon_image4} 
                             title='RECRUITMENT & STAFFING'
                             content='YES delivers full-cycle recruitment services to find the right talent for your open roles. Our innovative approaches focus on matching you with top talent in a wide range of industries. With YES’s expert services at your fingertips – hiring just got easier!'
                            />    
                        </Col>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <HowHelp imageSrc={icon_image5} 
                             title='EXECUTIVE SEARCH'
                             content='Behind every successful business is a great leader. YES’ Executive Search will empower your organization by finding leaders of tomorrow today that will drive sustainable growth. With our deep and connected network, knowledge, and proven experience, we will find a leader who fits the business needs'
                            />  
                        </Col>
                    </Row>
                    <Row className='how-help-boxes-container'>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                            <HowHelp imageSrc={icon_image6}
                             title='OUTSOURCING'
                             content='Focus on your core business and outsource some or all HR functions. YES will be your HR partner and function as an extension of your HR staff. We can handle hiring, engagement, employee issues, payroll, benefits, compensation, talent, compliance and more.'
                             />    
                        </Col>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <HowHelp imageSrc={icon_image7}
                             title='TRAINING AND ONBOARDING'
                             content='In addition to training on vital skills that are necessary in today’s job market, we also work together with clients to facilitate the onboarding process for new hires. Our training and onboarding processes are designed to create smooth and efficient experience for both job seekers and employers.'
                            />  
                        </Col>
                    </Row>

                    <Row className='home-how-help-center-see'>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <Button as={Link} to={'/home/about'} className='home-how-help-see-more' href='' name='see-more-button-link'>See More</Button>
                        </Col>
                    </Row>
                </Container>
                {/* JOB SEEKERS */}
                <Container className='home-seekers' id='jobseeker' data-aos="fade-up">
                    <div className='home-seekers-center'>
                    <Button as='a' className='home-seekers-button' href='' data-aos="fade-up" data-aos-duration="2000">JOB SEEKERS</Button>
                    <Row data-aos="fade-up" data-aos-duration="2000">
                        <h1>Let the <StyledUrContent texts='right job'/> find you</h1>
                    </Row>
                    <Row>
                        <Col data-aos="fade-up" data-aos-duration="2000">
                        <p className='silver-paragraph'>Get the job you've always dreamed of! We'll go beyond just your qualifications to identify how we can best help you reach success. 
                            Our resources are here to make sure you get a head - open those doors and let's move towards making that dream career yours! </p>
                        </Col>
                    </Row>
                    </div>
                    <Row className='home-seeker-boxes' data-aos="fade-up" data-aos-duration="2000">
                        <Seeker 
                        imageSrc={icon_image8}
                        title='Build a Resume '
                        content='Ready to earn that dream job? Break through the ranks with our personalized resume creator and get a winning CV in no time!'
                        To='https://yes-resume-builder.vercel.app/'
                        />
                        <Seeker 
                        imageSrc={icon_image9}
                        title='Upload Your Resume '
                        content="Need a job but feeling like you don't have the time? Don’t worry, we've got your career search covered!"
                        To='/jobs/sign-in'
                        />
                        <Seeker 
                        imageSrc={icon_image10}
                        title='Start Applying!'
                        content="Say goodbye to monotonous 9-5s, and start a journey that'll have you head over heels for your career!"
                        To='/jobs'
                        />
                    </Row>
                </Container>
                {/* Home Last Content */}
                <Container className='home-last-content' fluid>
                    <Row>
                        <Col className='home-last-content-texts'>
                            <h1>We bridge the gap between talent and businesses in Ethiopia.</h1>
                            <Button as={Link} to='/home/contact-us' className='home-last-content-button' name='home-last-content-start-button'>Start Now</Button>
                        </Col>
                        <Col>
                        <img src={image2} alt='last-content-image'/>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
            
        </>
    )
}
export default Home