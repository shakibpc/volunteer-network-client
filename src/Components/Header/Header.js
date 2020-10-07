import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Button, Form  } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png';
import './Header.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
        <div>
            <Navbar bg="" variant="" className="">
                <Navbar.Brand className="navbar-brand" href="/"><img src={logo} className='logo'/></Navbar.Brand>
                <Nav className="">
                    <Nav.Link className='text justify-content-end ' href={`/`}>Home</Nav.Link>
                    <Nav.Link className='text' href="#donation">Donation</Nav.Link>
                    <Nav.Link className='text' href="#event">Event</Nav.Link>
                    <Nav.Link className='text' href="#blog">Blog</Nav.Link>
                    <Nav.Link className='text' href="/login">{loggedInUser.name}</Nav.Link>
                </Nav>
                <Form inline>
                    <Link to={`/login`}> <Button variant="primary" >Log in</Button></Link>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;