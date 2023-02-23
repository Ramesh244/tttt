import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './Manager.css'

function ManagerPage() {

  const [accept, setAccept] = useState("")
  // const[reject, setReject] = useState("")
  const [chek, setChek] = useState(false)
  const [reject, setreject] = useState('rejected')
  const [arr, setArr] = useState([])
  const [status, setStatus] = useState('')
  const [data, setData] = useState([])
  const info = useSelector((state) => state.display.data)
  // console.log(info,"iam 25th line")
  const [username, setUserName] = useState(info)
  const{state}=useLocation()

  // const handleAccept = (e,i) => {
    
  //   if(i==)
  
   
  // }
  // axios.patch("http://192.168.4.33:8050/api/ticket/" + state.id + "/", abc)
  //   .then(res => {
  //     console.log(res, "osman ")
  //     //   setapi(res.data)       
  //   })

      useEffect(() => {
        axios.get("http://192.168.4.33:8050/api/ticket/").then(response =>
          setData(response.data))
      },[]) 

      // const handleAccept=(e,i)=>{
 



      // }

       const handleAccept =(e1,index)=>{
        // e1.preventDefault();
       
        console.log(e1.id);
         axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
          "id": e1.id,
          "Status": "accepted"
      })
    .then(res => {
      console.log(res, "osman ")
      //   setapi(res.data)       
    })
       


       }
      const handleReject = (e1) => {
        axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
          "id": e1.id,
          "Status": "rejected"
      })
    .then(res => {
      console.log(res, "osman ")
      //   setapi(res.data)       
    })

      }
      // console.log(data);

    
      return (
        <div >
          <h2>Welcome to Manager page:{username}</h2>
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
                <th>Status</th>
                <th>request_raised_at</th>
                {/* <th>Admin_comment</th>
                <th>Mgr_comment</th> */}
                {/* <button>accepted</button>
            <button>rejected</button> */}


              </tr>
            </thead>
            


            <tbody>
              {data.map((e, ind) => (
                <tr >
                  <td>{e.user}</td>
                  <td>{e.ticket_no}</td>
                  <td>{e.Subject}</td>
                  <td>{e.Severity}</td>
                  <td>{e.Type}</td>
                  <td>{e.Report_To}</td> 
                  <td>{e.Remarks}</td>
                  <td>
                    
                    <button type="button" class="btn btn-outline-primary" onClick={()=>handleAccept(e)}>accepted</button>
                    <button type="button" class="btn btn-outline-danger" onClick={()=>handleReject(e)}>rejected</button>
                  </td>
                  {
                    chek ?
                      <td>{accept}</td>
                      &&
                      <td>{reject}</td>
                      :
                      <td>{e.Status}</td>

                  }


                  <td>{e.request_raised_at}</td>
                  {/* <td>{e.Admin_comment}</td>
                  <td>{e.Mgr_comment}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }

export default ManagerPage








