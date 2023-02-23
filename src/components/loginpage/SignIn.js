import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { sending } from '../../Redux/Action';



function SignIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [arr, setArr] = useState([])
   
    const [submit, setSubmit] = useState(true)
    const[response,setResponse]=useState()

    const [show, setShow] = useState(false);
    const [signinUser,setSigninUser]=useState('')
    const handleClose = () => setShow(false);
    const[showmessege, setmessege] = useState('')
    const navigate = useNavigate()
    
    const dispath = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(name,password)


        let obj = {
            username: username,
            password: password
        }
        console.log(obj, "iam 38th line")
        dispath(sending(username))

        arr.push(obj)
        setArr(arr)
        setUsername("")
        setPassword("")
        console.log(username, "@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log(arr)
        setShow(true)

        axios.post("http://192.168.4.33:8050/api/login/", obj)
            .then(resp => {
                props.details(resp.data.is_superuser, resp.data.is_staff, resp.data.status)
                setResponse(resp.data.role)
                
                
                setShow(true)
               if(resp.data.status == "success"){
                    console.log(resp.data.message, "@Osman");
                    setmessege(resp.data.message)
                    if(resp.data.role=="manager"){
                        navigate('/manager') 
                    }
                    else if(resp.data.role=="employee"){
                        navigate('/userpage')
                    // }else if(resp.data.role=="manager"){
                    //     navigate('/manager')
                    }else{
                        navigate('/admin')
                    }
            
                }

               
               else {
                   setmessege(resp.data)
                   console.log(resp.data, "venkat");
                
               }
            
            })
            
            
            
            //   .then((res) => {
            //     console.log(res.data,"im at 63");
            //       if (res.data.role === "employee")
            //      navigate('/userpage');
            //     if (res.data.role === "OILC_Manager")
            //       navigate('/manager') 
            //       ;
                //  })

    }
    
        
    return (


        <div className="Auth-form-container1">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                            className="form-control mt-1"
                            placeholder="e.g OsmanKhan"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            minLength={4} maxLength={25}
                        />

                    </div>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="Password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            maxLength={15} minLength={3}
                        />

                    </div>
                    <div class="checkbox mb-3 mt-2">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary"
                            onClick={(e) => handleClick(e)}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    <div>
                        Don't have an Account?<Link to='/signup'><a href="#"><b>Sign Up</b></a></Link>
                    </div>
                    <p class="mt-3 mb-3 text-muted"> &copy; 2022-2023</p>
                </div>
            </form>
            <div>
                <Modal show={show} >
                  
                    <Modal.Body>
                        <h6>
                    {showmessege.length ? showmessege: "login Successfull"} 
                    </h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose}>ok</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}

export default SignIn
