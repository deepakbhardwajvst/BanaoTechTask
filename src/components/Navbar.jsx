import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { IoSparkles ,IoSearch, IoCompass, IoChevronDownOutline, IoBookmark, IoNotificationsSharp, IoCartSharp } from "react-icons/io5";


const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="contain">
            <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', marginInline: '15px' }}>
                <div style={{ backgroundColor: '#8064A2', color: '#fff', padding: '5px', borderRadius: '4px', marginRight: '10px',fontFamily:'DMM' }}>h</div>
                <div>
                    <span style={{ fontSize: '30px', color: '#8064A2', fontFamily: 'DMM' }}>hobbycue</span>
                    <div style={{ fontSize: '10px', color: '#8064A2', fontFamily: 'DMM' }}>Your Hobby, Your Community</div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className='d-flex' style={{ marginLeft: 'auto', marginRight: '50px' }}>
                    <FormControl type="text" placeholder="Search here.." className="mr-sm-2 mr-2" style={{ width: 'auto', minWidth: '150px', maxWidth: '400px',fontFamily:'DMM' }} />
                    <Button variant="outline-primary" style={{ backgroundColor: '#8064A2', color: 'white' }}>
                        <IoSearch color="white" height="20px" width="20px" />
                    </Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="/explore">
                        <IoCompass style={{ marginRight: '5px', fontSize: '25px', color: '#8064A2' }} />
                        <span style={{ color: '#8064A2', fontFamily: 'DMM' }}>Explore</span>
                        <IoChevronDownOutline style={{ marginRight: '20px', fontSize: '18px', color: 'grey' }} />
                    </Nav.Link>
                    <Nav.Link href="/explore">
                        <IoSparkles  style={{ marginRight: '8px', fontSize: '22px', color: '#8064A2' }} />
                        <span style={{ color: '#8064A2', fontFamily: 'DMM' }}>Hobbies</span>
                        <IoChevronDownOutline style={{ marginRight: '20px', fontSize: '18px', color: 'grey' }} />
                    </Nav.Link>
                    <Nav.Link>
                        <IoBookmark style={{ marginRight: '5px', fontSize: '25px', color: '#8064A2' }} />
                    </Nav.Link>
                    <Nav.Link>
                        <IoNotificationsSharp style={{ marginRight: '5px', fontSize: '25px', color: '#8064A2' }} />
                    </Nav.Link>
                    <Nav.Link>
                        <IoCartSharp style={{ marginRight: '5px', fontSize: '25px', color: '#8064A2' }} />
                    </Nav.Link>
                </Nav>
                <Button variant="outline-primary" style={{ marginLeft: '10px', color: '#8064A2', borderColor: '#8064A2', marginRight: '15px',fontWeight:500 ,fontFamily:'DMM',fontVariant:'revert',paddingInline:'20px',textTransform: 'none',}}>Sign In</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
