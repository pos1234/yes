import React, {useState} from 'react'
import {Row, Col, Navbar, Nav, Button, Container,Offcanvas,Carousel} from 'react-bootstrap'
import { Facebook,Twitter,Linked,Email,Star,Business,ArrowRight} from '../Constants/icons'
import Footer from './Footer'
import Navigation from './Navigation'
import image1 from '../images/image-1-11.avif'
import image2 from '../images/image-1-13.avif'
import icon_image1 from '../images/icon-image-7.avif'
import icon_image2 from '../images/icon-image-8.avif'
import icon_image3 from '../images/icon-image-9.avif'
import icon_image4 from '../images/icon-image-10.avif'
import icon_image5 from '../images/icon-image-11.avif'
import icon_image6 from '../images/icon-image-12.avif'
import icon_image7 from '../images/icon-image-13.avif'
import icon_image8 from '../images/icon-image-14.avif'
import icon_image9 from '../images/icon-image-15.avif'
import icon_image10 from '../images/icon-image-16.avif'
const YourHr = (props)=>{
    return(
            <Row className='home-your-hr-lists'>
                <Col className='icon-image-container'>
                    <img alt='icon-image' src={props.imageSrc}/>
                </Col>
                <Col xm={6} className='home-hr-texts'>
                    <h5>{props.title}</h5>
                    <p>{props.content}</p>
                    <Button className='list-button' as='a' href={props.href}><ArrowRight/></Button>
                </Col>
            </Row>
    )
}
const HowHelp = (props)=>{
    return(
        <Row className='how-we-help-rows'>
            <Col className='how-we-help-image'>
                <img src={props.imageSrc} alt='ac'/>
            </Col>
            <Col xs={11} >
                <h5>{props.title}</h5>
                <p className='silver-paragraph'>{props.content}</p>
            </Col>
        </Row>
    )
}
const Seeker = (props)=>{
    return (
        <Col className='home-seeker-lists'>
            <img src={props.imageSrc} alt='hey' />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Button className='list-button' as='a' href={props.href} ><ArrowRight/></Button>
        </Col>
    )
}
const Styled = ()=>{
    return (
        <span className="lqd-highlight-inner" style={{transitionDelay: '0ms'}}>
        <svg className="lqd-highlight-brush-svg lqd-highlight-brush-svg-1" xmlns="http://www.w3.org/2000/svg"
         width="235.509" height="13.504" viewBox="0 0 235.509 13.504" aria-hidden="true" preserveAspectRatio="none">
         <path d="M163,.383a13.044,13.044,0,0,1,1.517-.072,3.528,3.528,0,0,1,1.237-.134q.618.044,1.237.044a.249.249,0,0,1-.1.178.337.337,0,0,0-.1.266q3.092.088,6.184-.044T178.953.4l-.206-.088a12,12,0,0,0,4.123,0,13.467,13.467,0,0,1,5.772,0q1.443-.178,2.68-.266A5.978,5.978,0,0,1,193.8.4,16.707,16.707,0,0,1,198.01.045q2.164.088,4.844.088-.618.088-.824.134L201.412.4a3.893,3.893,0,0,0,2.061,0,5.413,5.413,0,0,1,1.649-.356q.618.088,1.134.178a9.762,9.762,0,0,0,1.544.09,17,17,0,0,1,3.092-.266q1.649,0,3.5.178,2.886.088,5.875.044t5.875-.222q0,.088.206.088h.412a21.975,21.975,0,0,0,2.577.889A12.458,12.458,0,0,1,232.12,2.18a3.962,3.962,0,0,1,1.031.622A3.349,3.349,0,0,1,234.8,3.825a5.079,5.079,0,0,1,.618,1.111q.412.534-1.031.98-1.031.444-.618.98a2.09,2.09,0,0,1,.206.889q0,.444.825.889.618.8-.206,1.245l-1.237.534q-1.443-.088-2.68-.134a17.255,17.255,0,0,1-2.267-.222,3.128,3.128,0,0,0-.928-.044,3.129,3.129,0,0,1-.928-.044q-2.267-.178-4.432-.266T217.7,9.476q-1.649-.088-2.886-.088a17.343,17.343,0,0,1-2.474-.178q-3.916,0-7.73-.088t-7.73-.266l-12.471-.178q-6.287-.088-12.883-.088h-1.958q-.928,0-1.958.088h-2.061q-1.031,0-2.061-.088-2.68-.088-5.256-.134t-5.256.044h-5.462q-2.577,0-5.462.088-4.535.088-8.76.178t-8.554.088q-2.886.088-5.875.088t-5.875.088q-1.443.088-2.886.134t-3.092.044q-4.741.178-9.791.312t-9.791.312q-2.267.088-4.329.088T78.77,10.1q-4.329.266-8.863.49t-9.276.49q-1.237.088-2.68.134a24.356,24.356,0,0,0-2.683.224q-2.68.178-5.462.312t-5.668.4q-2.474.266-4.741.312t-4.741.044q-1.031-.088-1.958-.134a9.684,9.684,0,0,1-1.958-.312,12.5,12.5,0,0,0-1.443-.312q-.825-.134-1.856-.31-2.886.356-6.39.666t-6.8.845a26.709,26.709,0,0,1-2.886.356,20.758,20.758,0,0,1-9.482-.889Q.232,11.962.026,11.25T1.263,9.917q0-.266.825-.266a13.039,13.039,0,0,0,2.886-.444A17.187,17.187,0,0,1,7.86,8.672q3.092-.266,6.184-.8,1.649-.178,3.3-.312t3.5-.312q4.123-.354,8.039-.712t8.039-.622q9.478-.8,18.758-1.338,2.68-.178,5.153-.356t4.741-.356q2.474-.178,5.05-.356T75.88,3.24h1.34a4.829,4.829,0,0,0,1.34-.178q2.267-.178,4.329-.222t4.329-.134a7.256,7.256,0,0,1,2.267,0,3.459,3.459,0,0,0,1.031-.088,6.009,6.009,0,0,1,2.37-.266,14.745,14.745,0,0,0,2.783-.088q1.649,0,2.474.088a1.308,1.308,0,0,1,.185.011,1.226,1.226,0,0,1,.33-.1,3.656,3.656,0,0,0,.515-.088,4.433,4.433,0,0,1,2.886.266q.412-.088,1.031-.178l1.237-.178q.412,0,1.031.044a5.761,5.761,0,0,0,1.237-.044q2.886-.088,5.772-.044a53.829,53.829,0,0,0,5.772-.222,9.505,9.505,0,0,1,1.34-.088h1.34a4.428,4.428,0,0,1,.821-.258l.825-.178a15.178,15.178,0,0,1,1.855.444,3.028,3.028,0,0,1,1.031-.534,4.039,4.039,0,0,1,1.443-.178,6.158,6.158,0,0,1,1.649.178,5.05,5.05,0,0,0,2.267.268q1.855-.088,3.813-.134T138.13,1.2q1.031,0,2.164-.044t2.37-.044q-.206-.088.412-.534h3.092q.412,0,.309.266t.928,0a5.845,5.845,0,0,1,1.443,0,31.833,31.833,0,0,0,5.359.088,21.471,21.471,0,0,1,6.8.178,5.236,5.236,0,0,0,1.031-.4q.412-.222.825-.4a.694.694,0,0,1,.137.07Z" transform="translate(0 0.002)">
        </path>
        </svg>
        </span>
    )
}

const Home = ()=>{
    return(
        <>
            <div className='home-container'>
                {/* Home entry */}
                <div className='home-entry'>
                    <div className='home-entry-content'>
                     <Navigation/>
                        <Row className='home-entry-headings'>
                            <h1 className='display-1 styled-ur'>Right <span className='underlined underline-clip'>fit!</span></h1>
                            <h1 className='right-now'><span></span></h1>
                            <Row className='home-button-container'>
                                <Col><Button as='a' className='home-entry-button'>Find Talent <span  className='button-icons'><Star/></span></Button></Col>
                                <Col><Button as='a' className='home-entry-button'>Find a Job <span  className='button-icons'><Business className='button-icons'/></span></Button></Col>
                            </Row>
                        </Row> 
                    </div>
                </div>
                {/* home bridge */}
                <Container className='home-bridge'>
                  
                     <Row>
                        <h1>We <span className='underlined underline-clip'>bridge</span> the gap</h1>
                    </Row>
                    <Row>
                        <Col>
                        <p className='silver-paragraph'>Whether you're looking to hire or get hired let us do the searching and find you
                         the right fit while you focus on what you do best</p>
                        </Col>
                    </Row>
                    <Row className='home-bridge-box-container'>
                        <Col>
                            <div class="scene">
                                <div class="card">
                                    <div class="face front">
                                        <Button className='bridge-button'>Employers</Button>
                                        <h2>Find Talent</h2>
                                    </div>
                                    <div class="face back">
                                    <Button className='bridge-button'>Submit a Job Order</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <div class="scene">
                                <div class="card">
                                    <div class="face front second-front">
                                        <Button className='bridge-button'>Job Seekers</Button>
                                        <h2>Find a Job</h2>
                                    </div>
                                    <div class="face back">
                                    <Button className='bridge-button'>Browse Jobs</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                {/* Your HR */}
                <Container className='home-your-hr'>
                    <Row>
                        <Col className='home-your-hr-content' >
                            <Button as='a' className='home-your-hr-button' href=''>EMPLOYERS</Button>
                            <h1>Your HR <span className='underlined underline-clip'>one-stop-shop</span></h1>
                            <p className='home-hr-p silver-paragraph'>Need the perfect addition to your team? Search no more! YES has got you covered - with just a few clicks, we connect employers and employees together like peanut butter & jelly. So why wait? Get tapping today – it's time for greatness!</p>
                            <div className='home-your-hr-content-lists'>
                            <YourHr imageSrc={icon_image1}
                             title='Find Talent'
                             content='Hiring made easy! Let us do the hard work for you by finding top talent for your open positions.'
                             href='jkjk'/>
                            <YourHr imageSrc={icon_image2}
                            title='Post a Job'
                            content='Click, Post, Hire'
                            href=''/>
                            <YourHr imageSrc={icon_image3}
                            title='Our Services'
                            content='Find out more about all our HR solutions'
                            href=''/>
                            </div>
                        </Col>
                        <Col className='home-your-hr-side-image' sm={12} lg={6}>
                            <img src={image1} alt=''/>
                        </Col>
                    </Row>
                </Container>
                {/* how we help */}
                <Container fluid className='home-how-help'>
                    <div className='home-how-help-center'>
                    <Button as='a' className='home-how-help-button' href=''>EMPLOYERS</Button>
                    <Row>
                        <h1>How we help you</h1>
                    </Row>
                    <Row>
                        <Col>
                        <p className='silver-paragraph'>Our specialist recruiters use state-of the-art technology with in-depth labour market and industry knowledge that cover every 
                            stage of the talent acquisition and engagement process to find you the right fit. </p>
                        </Col>
                    </Row>
                    </div>
                    <Row className='how-help-boxes-container'>
                        <Col>
                            <HowHelp imageSrc={icon_image4} 
                             title='Recruitment & staffing'
                             content='YES delivers full-cycle recruitment services to find the right talent for your open roles. Our innovative approaches focus on matching you with top talent in a wide range of industries. With YES’s expert services at your fingertips – hiring just got easier!'
                            />    
                        </Col>
                        <Col>
                        <HowHelp imageSrc={icon_image5} 
                             title='Executive search'
                             content='Behind every successful business is a great leader. YES’ Executive Search will empower your organization by finding leaders of tomorrow today that will drive sustainable growth. With our deep and connected network, knowledge, and proven experience, we will find a leader who fits the business needs'
                            />  
                        </Col>
                    </Row>
                    <Row className='how-help-boxes-container'>
                        <Col>
                            <HowHelp imageSrc={icon_image6}
                             title='outsourcing '
                             content='Focus on your core business and outsource some or all HR functions. YES will be your HR partner and function as an extension of your HR staff. We can handle hiring, engagement, employee issues, payroll, benefits, compensation, talent, compliance and more.'
                             />    
                        </Col>
                        <Col>
                        <HowHelp imageSrc={icon_image7}
                             title='Training and Onboarding'
                             content='In addition to training on vital skills that are necessary in today’s job market, we also work together with clients to facilitate the onboarding process for new hires. Our training and onboarding processes are designed to create smooth and efficient experience for both job seekers and employers.'
                            />  
                        </Col>
                    </Row>

                    <Row className='home-how-help-center-see'>
                        <Col>
                        <Button as='a' className='home-how-help-see-more' href=''>See More</Button>
                        </Col>
                    </Row>
                </Container>
                {/* JOB SEEKERS */}
                <Container className='home-seekers'>
                    <div className='home-seekers-center'>
                    <Button as='a' className='home-seekers-button' href=''>JOB SEEKERS</Button>
                    <Row>
                        <h1>Let the right job find you</h1>
                    </Row>
                    <Row>
                        <Col>
                        <p className='silver-paragraph'>Get the job you've always dreamed of! We'll go beyond just your qualifications to identify how we can best help you reach success. 
                            Our resources are here to make sure you get a head - open those doors and let's move towards making that dream career yours! </p>
                        </Col>
                    </Row>
                    </div>
                    <Row className='home-seeker-boxes'>
                        <Seeker 
                        imageSrc={icon_image8}
                        title='Build a Resume '
                        content='Ready to earn that dream job? Break through the ranks with our personalized resume creator and get a winning CV in no time!'
                        />
                        <Seeker 
                        imageSrc={icon_image9}
                        title='Upload Your Resume '
                        content="Need a job but feeling like you don't have the time? Don’t worry, we've got your career search covered!"
                        />
                        <Seeker 
                        imageSrc={icon_image10}
                        title='Start Applying!'
                        content="Say goodbye to monotonous 9-5s, and start a journey that'll have you head over heels for your career!"
                        />
                    </Row>
                </Container>
                {/* Home Last Content */}
                <Container className='home-last-content' fluid>
                    <Row>
                        <Col className='home-last-content-texts'>
                            <h1>We bridge the gap between talent and businesses in Ethiopia.</h1>
                            <Button className='home-last-content-button' as='a' href=''>Start Now</Button>
                        </Col>
                        <Col>
                        <img src={image2} />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}
export default Home