import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
// import TicketRaisedForm from '../TicketRaisedForm';
import Table from 'react-bootstrap/Table';
import './UserPage.css'
import axios from 'axios';
import { useSelector } from 'react-redux';



function UserPage() {

  const [show, setShow] = useState(false)

  const [data1, setdata1] = useState([]);
  const [arr, setArr] = useState([])
  const info=useSelector((state)=>state.display.data)
  console.log(info,"iam 25th line")
  const[username,setUserName]=useState(info)



  useEffect(() => {
    axios.get('http://192.168.4.33:8050/api/ticket/')
      .then(res => {
        setdata1(res.data)
      })
  }, [])
  const handleClick = (e) => {
    setShow(!show)
  };

  const handleTicket = (e) => {
    if (arr.indexOf(e) === -1) {
      arr.push(e)
      let b = [...arr]
      setArr(b)
    }

  }
  return (

    <div className='container'>
      <span className='heading'><h1 >Welcome:{username}</h1></span>
      <Link to='/RaiseTicket'><button type="submit" className='btn btn-success' onClick={() => handleClick}>Raise Your Ticket</button></Link>
      <div>
        <h3>Ticket Information</h3>

        {data1.map((e) => (
          <ul>
            <Link to='/TicketTable' state={{ details: arr }} >
              <li onClick={() => handleTicket(e)}>{e.ticket_no}</li>
            </Link>
          </ul>
        ))}


        {/* <Table striped bordered hover>
              <thead>
                <tr>
                  <th>user</th>
                  <th>Ticket_no</th>
                  <th>Subject</th>
                  <th>Severity</th>
                  <th>Type</th>
                  <th>Manager</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th>Request_raised_at</th>
                  <th>Comment</th>
                  
                </tr>
              </thead>
              <tbody>
            {  data1.map((e, i) => (
                <tr>
                <td>{i+1}</td>
                  <td>{e.ticket_no}</td>
                  <td>{e.Subject}</td>
                  <td>{e.Severity}</td>
                  <td>{e.Type}</td>
                  <td>{e.Manager}</td>
                  <td>{e.Remarks}</td>
                  <td>{e.Status}</td>
                  <td>{e.request_raised_at}</td>
                  <td>None</td>
                </tr>
                  ))

                }
              </tbody>
            </Table> */}

      </div>
    </div>
  )
}


export default UserPage
