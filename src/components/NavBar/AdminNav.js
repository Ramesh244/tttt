import axios from 'axios';
import { useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Images/my-tickets-icon.png'
import './HomeNav.css';


function AdminNav() {
    const [flag, setflag] = useState(false)
    const val = useLocation();
    // console.log(val.state);
    const navigate = useNavigate()

    const handleLogout = (e) => {
        setflag(!flag)
        console.log(!flag);
    navigate('/signin')
    }

    const handleLogin = (e) => {
        setflag(false)
        navigate()
    }

    return (
        <div>
            <Navbar bg="secondary" expand="lg">
                <Container fluid>
                    <Navbar.Brand><img src={Logo} alt='brandlogo' style={{ width: "45px", height: "45px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to='/'><button type="button" className='btn btn-success'>Home</button></Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to='/signin' > <button type="button" className='btn btn-success' onClick={handleLogin}>SignIn</button></Link>
                            </Nav.Link>
                            {/* <Nav.Link>
                            <Link to='/signup'><button type="button" className='btn btn-success' >SignUp</button></Link>
                        </Nav.Link> */}

                            <DropdownButton
                                variant="success"
                                title="👤Profile"
                                id="input-group-dropdown-1"
                                className='ddb'
                                align="end"

                            >
                                <Dropdown.Item><i class="bi bi-sliders"></i>⚙️Setting</Dropdown.Item>
                                <Dropdown.Item>🔔Notification</Dropdown.Item>

                                <Dropdown.Divider />

                                <Link to='Logout'><Dropdown.Item onClick={handleLogout}><i class="bi bi-box-arrow-left"></i>Logout</Dropdown.Item></Link>
                                {/* <Link to='/'><Dropdown.Item onClick={handleLogout}><i class="bi bi-box-arrow-left"></i>Login</Dropdown.Item></Link> */}
                            </DropdownButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>

    );
}

export default AdminNav;
