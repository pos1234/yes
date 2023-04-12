import React from 'react'
import logo from '../images/yes-logo.svg'
import {Row, Dropdown, Col,Form, Navbar, Nav, Button, Container,Offcanvas} from 'react-bootstrap'
import {Business,Location,Heart,Share} from '../Constants/icons'
const SearchResult = (props)=>{
    return (
        <Row className='search-result-container'>
            <Col sm={1}>
                <img src={props.imageSrc} alt='search-result-logos' />
            </Col>
            <Col>
                <h2>{props.title}</h2>
                <p>{props.discription} [...]</p>
                <div>
                    <p className='posted-content'>Posted: {props.postedTime} <span className='empty-space'></span><Business/> {props.requirement} <span className='empty-space'></span> <Location/> {props.location}</p>
                </div>
                <Button as='a' name='job-type-button-link' className='button'>{props.jobType}</Button>
            </Col>
            <Col sm={1} className='like-share-icons'>
                    <div>
                        <Heart />
                    </div>
                    <div className='like-icon'>
                        <Share />
                    </div>
            </Col>
        </Row>
    )
}

class ClientHub extends React.Component {
    render() {
         const expand='md';
      return (
        <>
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
          <Container className='search-bar-container' fluid='xs'>
                <Row className='search-bar-inner-container'>
                    <Row>
                        <Col className='search-bar-cols'>
                            
                            <Form>
                                <Form.Group className="mb-3" controlId="formJobTitle">
                                  {/*  <Search/>  */}<Form.Control type="text" placeholder="Job title, keywords..." />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className='search-bar-cols'>
                            <Form>
                                <Form.Group controlId="formCity">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className="drop-down-buttons">
                                    <Location/> City or "Remote"
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="drop-down-menus">
                                        <Dropdown.Item href="#/action-1">Addis Ababa</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Assosa</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Bahir Dar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Debre Birhan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Ethiopia</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Jijiga</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Mekelle</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remote</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className='search-bar-cols'>
                            <Form>
                                <Form.Group  controlId="formCity">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="drop-down-buttons">
                                    <Business/> All Categories
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="drop-down-menus">
                                        <Dropdown.Item href="#/action-1">Agriculture, Food & Natural Resources</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Arts, Audio/ Video Technology & Communications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Business Management and Administration</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Education & Training</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Government & Public Administration</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Health Science</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Hospitality & Tourism</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Human Resources</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Information Technology</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">International Trade & Development</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Manufacturing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Marketing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Science, Technology, Engineering & Mathematics</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Transportation, Distribution & Logistics</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className='search-bar-cols'>
                            <Form>
                                <Form.Group  controlId="formCity">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className="drop-down-buttons">
                                    <Location/> City or "Remote"
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="drop-down-menus">
                                        <Dropdown.Item href="#/action-1">
                                            Type
                                        <Form>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Contrat"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Freelance"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Full Time"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Internship"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Part-Time"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Remote"
                                            />
                                            </Form>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Qualification
                                        <Form>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Certificate"/>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Bachelor Degr.."
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Master's Degree"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Doctorate Deg.."
                                            />
                                            </Form>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            Salary Range
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">0 - 10,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">10,001 - 30,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">60,001 - 100,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">100,001 - 200,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">200,001 - 400,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">400,001 and above in a Month</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Row>
          </Container>
          <Container>
            <SearchResult
                imageSrc={logo}
                title='Social Media Engagement Manager'
                discription='On behalf of our esteemed client, we are seeking a top-notch Social Media Engagement Manager to join a dynamic team in managing our client’s brand presence across various platforms, including Facebook, Telegram, TikTok, YouTube, and Instagram. As a Social Media Engagement Manager, you will take the lead in engaging with audiences, building positive relationships, and'
                postedTime='22 hours ago'
                requirement='Business Management and Administration'
                location='Addis Ababa'
                jobType='FullTime'
            />
            <SearchResult
                imageSrc={logo}
                title='Social Media Engagement Manager'
                discription='On behalf of our esteemed client, we are seeking a top-notch Social Media Engagement Manager to join a dynamic team in managing our client’s brand presence across various platforms, including Facebook, Telegram, TikTok, YouTube, and Instagram. As a Social Media Engagement Manager, you will take the lead in engaging with audiences, building positive relationships, and'
                postedTime='22 hours ago'
                requirement='Business Management and Administration'
                location='Addis Ababa'
                jobType='FullTime'
            />
            <SearchResult
                imageSrc={logo}
                title='Social Media Engagement Manager'
                discription='On behalf of our esteemed client, we are seeking a top-notch Social Media Engagement Manager to join a dynamic team in managing our client’s brand presence across various platforms, including Facebook, Telegram, TikTok, YouTube, and Instagram. As a Social Media Engagement Manager, you will take the lead in engaging with audiences, building positive relationships, and'
                postedTime='22 hours ago'
                requirement='Business Management and Administration'
                location='Addis Ababa'
                jobType='FullTime'
            />
          </Container>
      </>
      )
    }
  }

export default ClientHub