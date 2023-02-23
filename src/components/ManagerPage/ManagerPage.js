import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './Manager.css'

function ManagerPage() {

  const [user, setUser] = useState('')
  const [ticket_no, setTicten_no] = useState()
  const [subject, setSubject] = useState('')
  const [severity, setSeverity] = useState('')
  const [type, setType] = useState('')
  const [manager, setManager] = useState('')
  const [time, setTime] = useState('')
  const [status, setStatus] = useState('')
  const [remarks, setRemarks] = useState('')
  const [arr, setArr] = useState([])
  const [data, setData] = useState([])



  

  useEffect(() => {
    axios.get("http://192.168.4.33:8050/managerapi/").then(response =>
      setData(response.data))
  })
  localStorage.getItem()

  return (
    <div >
      <h2>Welcome to manager page</h2>
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
            <th>Status</th>
            <th>request_raised_at</th>
            <th>Admin_comment</th>
            <th>Mgr_comment</th>
            <button>accepted</button>
            <button>rejected</button>
            

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
                {console.log(e.status)}
              <button>{e.status}</button>
              {/* <button>{e.status}</button> */}
              </td>
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

export default ManagerPage



