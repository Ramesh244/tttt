import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormSelect } from 'react-bootstrap';

function SignUp() {

  const [username, setUsername] = useState("")
  const [first_name, setFirstname] = useState()
  const [last_name, setLastname] = useState()
  const [role, setRole] = useState('')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [errors, setErrors] = useState(false)
  const [esubmit, setEsubmit] = useState(false)

  const [arr, setArr] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleFirstname = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setFirstname(result)
  }
  const handleLastname = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setLastname(result)
  }
  
  const handleClick = (e) => {
    e.preventDefault();

    const obj = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password2: password2,
      role:role,
    };
    
    let arr1 = []
    arr1.push(obj);
    setArr([...arr]);
    console.log(arr1,"arr1");

    setUsername("");
    setFirstname("");
    setLastname("");
    setEmail("");
    setRole("");
    setPassword("");
    setPassword2("");

    setEsubmit(true);
    if (username.length == 0 || first_name.length == 0 || last_name == 0) {
      setErrors(true);
    }
    else {
      setErrors(false);
      setShow(true);
    }

    axios.post("http://192.168.4.33:8050/api/signup/", obj)
      .then(response => console.log(response.status.code));

  }

  return (

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?
            <Link to='/signin'><a href="#"><b>Sign in</b></a>
            </Link>
          </div>

          <div className="form-group mt-1">
            <label>Username</label>
            <input
              type="^[A-Za-z][A-Za-z0-9_]{7,29}$"
              className="form-control mt-1"
              placeholder="e.g OsmanKhan"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={4} maxLength={25}
            />
            {
              errors && username.length == 0 ? <p style={{ color: "red" }}>* Please select Valid username</p> : null}
          </div>

          <div className="form-group mt-1">
            <label>Firstname</label>
            <input
              type='/^[A-Za-z]+$'

              className="form-control mt-1"
              placeholder="e.g Osman"
              value={first_name}
              onChange={handleFirstname}
              //   (e) => setFirstname(e.target.value)
              // }
              minLength="3"
            />
            {
              errors && first_name.length == 0 ? <p style={{ color: "red" }}>* Please enter Valid Firstname</p> : null}
          </div>
          <div className="form-group mt-1">
            <label>Last Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Khan"
              value={last_name}
              onChange={handleLastname}
              minLength="3"
            />
            {
              errors && last_name.length == 0 ? <p style={{ color: "red" }}>* Please enter Lastname</p> : null}
          </div>

          <div className="form-group mt-1">
            <label>Select Role:</label>
            <FormSelect aria-label="Default select example"
              value={role} 
              onChange={(e)=>setRole(e.target.value)}>
              <option >Select role</option>
              <option value="admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="manager">Manager</option>
              {/* <option value="Deployed_manager">Deployed_Manager</option> */}

              {/* {value.map((e) => (
                                <option>{e.role}</option>
                            ))}  */}

            </FormSelect>
          </div>
          <div className="form-group mt-1">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"

              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-1">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-1">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1" id="floatingPassword"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mt-1">
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Submit
            </button>

          </div>
          <p className="text-center mt-1">
            Forgot <a href='#'>password?</a>
          </p>
        </div>
      </form>
      <div>
        <Modal show={show} onHide={handleClose}>

          <Modal.Body>Wow..! Sign up successful...!</Modal.Body>
          <Modal.Footer>
            <Link to='/signin'><Button variant="secondary" >
              Click to Login
            </Button></Link>

          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}

export default SignUp
