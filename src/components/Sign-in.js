import React from 'react';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import NavbarJobs from './NavbarJobs'
import image1 from '../images/image-1-4.avif'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterJobs from './FooterJobs';
const SignIn = ()=>{
    return(
        <>
        <NavbarJobs/>
       
        <Container fluid className='login-container' >
        <Row>
            <Col md={7} className='log-side-image'>
                <img src={image1}/>
            </Col>
            <Col md={5}>
            <Form className='login-form'>
                <h1>Welcome to YES</h1>
                <Form.Group className="mb-4 " controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="text-field" type="email text-field" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-3 text-field" type="password" placeholder="Password" />
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formKeepMeSigned">
                        <Form.Check type="checkbox" label="Keep me signed in" />
                    </Form.Group>
                    </Col>
                    <Col>
                        <a className='forgot-pwd'>Forgot password?</a>
                    </Col>
                </Row>
                <Button className='login-button' variant="primary" type="submit">
                    Login
                </Button>
                <Row className='or-hr'>
                    <Col>
                        <hr/>
                    </Col>
                        Or
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button as='a' className='google-button'>
                        <GoogleIcon sx={{fontSize:18}}/> &nbsp;   Google
                        </Button>
                    </Col>
                    <Col>
                        <Button  as='a' className='linked-button'>
                          <LinkedInIcon sx={{fontSize:18}}/> &nbsp;  LinkedIn
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <a className='register-link'>Don't have an account? <span>Register</span></a>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container>
    <FooterJobs /> 
    </>
    )
}
 export default SignIn