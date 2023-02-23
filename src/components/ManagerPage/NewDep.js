import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function NewDep() {
  const[accept,setAccept] = useState('')
  const[reject,setreject]=useState('')
  const[data,setData]=useState([])
  useEffect(() => {
    axios.get("http://192.168.4.33:8050/api/ticket/").then(response =>
      setData(response.data))
  })
  const handleAccept =(e)=>{
    setAccept(e.target.value)
    
   }
   const handleReject=(e)=>{
    setreject(e.target.value)
    
   }
  return (
    <div >
      <h2>Welcome to Dep_manager page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>user</th>
            <th>Ticket_no</th>
            <th>Subject</th>
            <th>Severity</th>
            <th>Type</th>
            <th>Report_To</th>
            <th>Remarks</th>
            <th>Accept/Reject</th>
            <th>Status{accept}</th>
            
            <th>request_raised_at</th>
            <th>Admin_comment</th>
            <th>Mgr_comment</th>
            {/* <button>accepted</button>
            <button>rejected</button> */}
            

          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr>
              <td>{e.user}</td>
              <td>{e.ticket_no}</td>
              <td>{e.Subject}</td>
              <td>{e.Severity}</td>
              <td>{e.Type}</td>
              <td>{e.Report_To}</td>
              <td>{e.Remarks}</td>
              <td>
                <button type="button" class="btn btn-outline-info" onClick={handleAccept}>accepted</button>
                <button type="button" class="btn btn-outline-info" onClick={handleReject}>rejected</button>
              </td>
              <td>{e.Status}</td>
              
              <td>{e.request_raised_at}</td>
              <td>{e.Admin_comment}</td>
              <td>{e.Mgr_comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default NewDep
