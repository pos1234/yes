import React ,{useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {StyledUr,StyledUrContent} from './StyledUr'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'
import Navigation from './Navigation'
import ToggledContent from "./ToggledContent"
import image1 from '../images/image-1-3.avif'
import image2 from '../images/image-1-4.avif'
import image3 from '../images/image-1-5.avif'
import image4 from '../images/image-1-6.avif'
import image5 from '../images/image-1-7.avif'
import image6 from '../images/image-1-8.avif'
import image7 from '../images/image-1-9.avif'
import image8 from '../images/image-1-10.avif'
import icon_image1 from '../images/icon-image-1.avif'
import icon_image2 from '../images/icon-image-2.avif'
import icon_image3 from '../images/icon-image-3.avif'
import icon_image4 from '../images/icon-image-4.avif'
import icon_image5 from '../images/icon-image-5.avif'
import icon_image6 from '../images/icon-image-6.avif'
import icon_image7 from '../images/jet-svg.svg'
import icon_image8 from '../images/micro-svg.svg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Helmet } from "react-helmet-async"
const Boxes = (props)=>{
    return(
        <Col className="Boxes">
            <h1>{props.title}</h1>
            <img src={props.imageSrc} alt="image-for-boxes" />
        </Col>
    )
}

const About = () =>{
    useEffect(() => {
        AOS.init({once: true});
      }, [])
    return(
        <div>
            <Helmet>
                <title>About YES | Empowering Ethiopian Business & Job Seekers</title>
                <meta name="description" content="Learn how YES has transformed the Ethiopian labor market by connecting business with top talent and providing innovative HR solutions for sustainable growth"/>
            </Helmet>
       <div className="about-container">
        
       <div className='about-entry'>
                    <div className='about-entry-content'>
                     <Navigation/>
                        <Row className='about-entry-headings' >
                            <h1 className='display-1 styled-ur'>Your one-stop-shop for employment solutions in <StyledUr text='Ethiopia!' /></h1>
                            <Row className='about-icon-container'>
                                <Col><a href='#about-deliver'>
                                    <ArrowDownwardIcon sx={{ fontSize: 50}}/>
                                </a></Col>
                            </Row>
                        </Row> 
                    </div>
                </div>
       <Container>
        
        <Container className="about-deliver" id='about-deliver' >
            <Row className="about-deliver-content" data-aos="fade-up" data-aos-duration="2000">
                <Col>
                <Button className='about-deliver-button' name="about-deliver-link-button" href=''>ABOUT US</Button>
                <h1 className="about-headings">Delivering YES Moments</h1>
                <h2>Bridging the Gap Between Employers & Job Seekers For High-Impact Business Outcomes</h2>
                <p>YES | Your Employment Solutions is a robust and knowledgeable HR services company in Ethiopia specializing in employee recruitment, outsourcing, payroll management, and training.</p>
                <p>We work with our clients to deliver happy YES moments by leading them to successful new hires, simplifying their HR processes, and providing experienced and helpful HR support.</p>
                <p>Since 2015, YES has provided local and international clients with the right people to fill their most needed professional roles at the right time. We can help you have that YES moment, too!</p>
                </Col>
            </Row>
            <Row className='about-deliver-boxes' data-aos="fade-up" data-aos-duration="2000">
                <Col sm={1} >
                    <img src={icon_image7} alt="mission-icon"/>
                </Col>
                <Col className="about-deliver-boxes-content">
                    <h1>Mission</h1>
                    <p className="silver-paragraph">Our mission is to bridge the gap between organisations and people who will shape our future communities with excellence, integrity and respect at its core. That's why we take pride in professionally managing HR tasks so businesses can focus on what matters most: growth. Through well-designed, efficient, and positive experiences, we deliver meaningful career opportunities to the future workforce, giving back to the community in which we work, live and play. </p>
                </Col>
            </Row>
            <Row className='about-deliver-boxes' data-aos="fade-up" data-aos-duration="2000">
                <Col sm={1}>
                    <img src={icon_image8} alt="vision-icon"/>
                </Col>
                <Col className="about-deliver-boxes-content">
                    <h1>Vision</h1>
                    <p className="silver-paragraph">At YES, our expertise, excellence and integrity drive us to be the top service company in Ethiopia. We envision to be the bridge between growing companies and growing minds for the future benefit of our local communities.   </p>
                </Col>
            </Row>
        </Container>
        <Container className="about-values">
            <Row data-aos="fade-up" data-aos-duration="2000">
            <Col>
                <h1  className="about-headings" >Values Are At Our Core</h1>
                <p className="sub-heading">Excellence. Intergrity. Respect.</p>
                <img src={image1} alt='running on the steps'/>
            </Col>
            <Col className='Toggle-collection'>
                <Row>
                    <ToggledContent btnText='Clients'
                    paragraph='We take pride in understanding the uniqueness of each recruitment process—listening and planning carefully before taking action to ensure successful results every time! #YesWeWill'
                    />
                    <ToggledContent btnText='Candidates'
                    paragraph='Candidates come first here; as a job seeker you are not just a number but part of our journey towards building a positive community through career advancement. That’s why we strive to empower you with resources, support and  encouragement as you blaze new trails on your chosen path! #YesWeWill'
                    />
                    <ToggledContent btnText='Community'
                    paragraph="At YES, we are more than just an HR firm; we 're a partner in community building. Through our services, we strive to catalyse excellence and promote hope while empowering individuals with the tools they need to reach their fullest potentials! #YesWeWill "
                    />
                </Row>
            </Col>
        </Row>
    </Container>
    </Container>
    <Container className="about-services">
        <Row data-aos="fade-up" data-aos-duration="2000">
            <Col>
            <Button as='a' className='about-deliver-button' href='' name="about-deliver-button-link">Services</Button>
                <h1  className="about-headings">YES, We Do That.</h1>
                <p>Everyone has potential waiting to be released. Your business has the potential to grow, and your career has the potential to find success. We are here to help you explore your potential and uncover which way to go next.</p>    
                <p>By bridging the gap between employers and job seekers, we are filling a need for businesses in Ethiopia. You are much too busy growing to be bogged down with HR tasks. So, we are here to assist you with that in any way we can.</p>    
            </Col>
        </Row>
        <Row className="Boxe-container" data-aos="fade-up" data-aos-duration="2000">
            <Row>
            <Boxes title='Recruitment & Staffing'
            imageSrc={icon_image1}/>
            <Boxes title='Outsourcing & Payroll Management'
            imageSrc={icon_image2}/>
            <Boxes title='Executive Search'
            imageSrc={icon_image3}/>
            </Row>
            <Row>
            <Boxes title='Assessment and Background Check'
            imageSrc={icon_image4}/>
            <Boxes title='Career Coaching'
            imageSrc={icon_image5}/>
            <Boxes title='Training and Development'
            imageSrc={icon_image6}/>
            </Row>
        </Row>
    </Container>
    <Container className="about-common-style" id="section">
        <Row data-aos="fade-up" data-aos-duration="2000">
            <Col sm={6} className="about-common-style-left">
                
                <h1  className="about-headings">Recruitment & <StyledUrContent texts='Staffing' /></h1>
                <p>
                YES offers comprehensive staffing solutions designed to streamline the recruitment process and help you find your ideal candidate faster. Our innovative approaches focus on matching you with top talent in a wide range of industries such as manufacturing, engineering, HR management, sales & marketing etc., With YES’s expert services at your fingertips – hiring just got easier! During the recruitment process, we provide:
                </p>
                <Row>
                    <Col>
                        <ul>
                            <li> Job advertising</li>
                            <li>Candidate sourcing</li>
                            <li>Applicant screening</li>
                            <li>Interviewing</li>
                        </ul>
                    </Col>
                    <Col>
                            <ul>
                                <li>Assessment & Background Checks</li>
                                <li>Negotiation</li>
                                <li>Onboarding</li>
                            </ul>
                    </Col>
                </Row>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
            <Col>
            <img src={image2} alt="people discussing"/> 
            </Col>
        </Row>
    </Container>
    <Container className="about-common-style">
        
        <Row data-aos="fade-up" data-aos-duration="2000">
            <Col>
                <img src={image3} alt="people discussing on a table"/> 
            </Col>
            <Col sm={6} className="about-common-style-right">
                <h1  className="about-headings"><StyledUrContent texts='HR Outsourcing' /> | Payroll Management</h1>
                <p>
                    YES is the ultimate solution for all your Ethiopian expansion and HR project needs - our reliable HR Outsourcing and Payroll Management services ensure you are in full compliance with employment regulations while minimising distractions from growing your business. Our comprehensive suite of offerings includes tailored employment contracts, payroll and benefits management based on the Ethiopian labour law, robust HRIS systems aligned to local statutory requirements and international standards giving you peace of mind along with a first class employee experience!
                </p>
                <Row>
                    <Col>
                        <ul>
                            <li> Employment Contracts</li>
                            <li>Compliance</li>
                            <li>HRIS</li>
                            <li> Payroll & Pensions</li>
                            <li>  Benefits Administration</li>
                        </ul>
                    </Col>
                </Row>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
           
        </Row>
    </Container>
    <Container className="about-common-style">
        <Row data-aos="fade-up" data-aos-duration="2000">
        <Col>
            <img src={image4} alt="people chatting"/> 
            </Col>
            <Col sm={6} className="about-common-style-right">
                <h1  className="about-headings"><StyledUrContent texts='Executive' /> Search</h1>
                <p>
                Get the best leader for your organisation with YES' executive search services. YES provides comprehensive executive search services, bringing the right leaders to your organisation and making sure each one fits perfectly with its culture. Our expert team leverages their knowledgeable skill-set to identify and deliver candidates who match organisational culture, promising a positive leadership outcome that will take you into a brighter tomorrow!
                </p>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
           
        </Row>
    </Container>
    <Container className="about-common-style">
        <Row data-aos="fade-up" data-aos-duration="2000">
            <Col sm={6} className="about-common-style-left">
                <h1  className="about-headings"><StyledUrContent texts='Career' /> Coaching</h1>
                <p>
                Unlock your potential with YES and start down an exciting career path. Our highly-qualified team will equip you with essential tools such as resume building, interview practice and job searching strategies to help ensure that all of your hard work pays off.                </p>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
            <Col>
            <img src={image5} alt="people chatting on a table"/> 
            </Col>
        </Row>
    </Container>
    <Container className="about-common-style about-white-back" fluid>
        <Row data-aos="fade-up" data-aos-duration="2000">
        <Col>
            <img src={image6} alt="people argueing"/> 
            </Col>
            <Col sm={6} className="about-common-style-right">
                <h1  className="about-headings"><StyledUrContent texts='Assessment' />  and Background Check</h1>
                <p>
                Let’s make sure your new hire checks all of the boxes. With our pre-employment tests and background tests, we’ll ensure your candidate is a qualified YES match giving employers peace of mind when making new hires. Some of our assessment and background check options include:
                </p>
                
                <Row>
                    <Col>
                        <ul>
                            <li>Content/Copywriting Test</li>
                            <li>Computer Proficiency Test</li>
                            <li>Accounting Tests</li>
                            <li>Criminal History Check</li>
                            <li>Prior Employment Verification</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Education Verification</li>
                            <li>Professional License & Certificate Verification</li>
                            <li>Criminal History Check</li>
                            <li>Social Media & Internet Check</li>
                            <li>Reference Check</li>
                        </ul>
                    </Col>
                </Row>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
        </Row>
    </Container>
    
    <Container className="about-common-style">
        <Row data-aos="fade-up" data-aos-duration="2000">
            <Col sm={6} className="about-common-style-left">
                <h1  className="about-headings"><StyledUrContent texts='Training' />  and Development</h1>
                <p>
                Finding the right fit is only the beginning. Investing in the growth and development of your team's core skills and competencies will elevate their performance to a whole new level. Our comprehensive training and development programs are designed to help your employees reach their future goals. With an array of short & long course programs to choose from, we provide practical tools and resources that professionals can use to not only ensure productivity at work but innovation as well. What makes us unique is our hands-on approach that bases all programs on actual gaps and needs observed during our analysis period. This enables us to deliver tailor made development programs that are client centric and bring long lasting change.
                Here is a list of fields where we can provide additional training and development opportunities.                </p>
                <Row>
                    <Col>
                        <ul>
                            <li> Human Resources (HR)</li>
                            <li>Manufacturing</li>
                            <li>Sales</li>
                            <li>Marketing</li>
                            <li>Information Technology</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Supply Chain</li>
                            <li>Accounting</li>
                            <li>Finance</li>
                            <li>Operations</li>
                        </ul>
                    </Col>
                </Row>
                <Link to={'/home/contact-us'} className='learn-more-link'>-- Learn More</Link>
            </Col>
            <Col>
            <img src={image7} href="" alt='developer discussing'/> 
            </Col>
        </Row>
    </Container>
    <Container className="about-common-style about-last-content">
        <Row data-aos="fade-up" data-aos-duration="2000">
        <Col className='Toggle-collection'>
            <Row>
                <ToggledContent btnText='We Get it Right'
                paragraph="We take a hands on, personalized approach to understand our clients' business needs and we get to know each candidate individually. Our talent acquisition experts utilize cutting edge technology and proven process to source, screen, evaluate, select and secure candidates that are the perfect fit helping to ensure 100% satisfaction, every time!"
                />
                <ToggledContent btnText='Quality of Service'
                paragraph='We take pride in using our expertise and extensive network to help you find the best match. But we don’t stop there! We will periodically check in to ensure that you are happy with our service.'
                />
                <ToggledContent btnText='Speed'
                paragraph="We work to reduce your time-to-hire by responding quickly to your needs without ever compromising our commitment to high-end staffing solutions. No job opening gets piled away for later, we start our speedy recruiting processes from the minute you contact us! "
                />
            </Row>
        </Col>
        <Col>
            <h1  className="about-headings">What Sets Us Apart</h1>
            <h2>We put the cherry on top!</h2>
            <img src={image8} alt='running on the steps'/>
        </Col>
    </Row>
    </Container>
    
       </div>
       <Footer />
       </div>
    )
}
export default About