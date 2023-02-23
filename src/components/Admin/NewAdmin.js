import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NewAdmin() {

  const [data1, setdata1] = useState([])
  const [note, setNote] = useState()



  const info = useSelector((state) => state.display.data)
  // console.log(info, "iam 25th line")
  const [username, setUserName] = useState(info)

  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  useEffect(() => {
    axios.get("http://192.168.4.33:8050/api/ticket/")
      .then(response =>
        setdata1(response.data)
      )
  }, [])

  const [idd, setidd] = useState()
  const [obj1, setobj1] = useState({})
  const handleSubmit = (e1) => {
    console.log(e1.id);
    axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
     "id": e1.id,
     "Status": "completed"
 })
.then(res => {
 console.log(res, "osman ")
 //   setapi(res.data)       
})


    // setobj1(e)
    //   const obj={
    //     "id": e.id,
    //     "ticket_no": e.ticket_no,
    //     "user": e.user,
    //     "Subject": e.Subject,
    //     "Severity": e.Severity,
    //     "Type": e.Type,
    //     "Report_To": e.Report_To,
    //     "Remarks": e.Remarks,
    //     "Status": e.Status,
    //     "Admin_comment": note,
    //     "Mgr_comment": "",
    //     "request_raised_at": e.request_raised_at
    // }
    // setobj1(obj)
    // setidd(e.id)
    // console.log(e.id);
    // setShow(true)
    //  console.log(idd);
  }
  // console.log(obj1.id);
//   const handleClick = (index) => {
//     console.log(id);
//     console.log(obj1.id, typeof obj1.id, "venkat");

   
//     console.log(abc, "iiii");
// console.log("http://192.168.4.33:8050/api/ticket/" + obj1.id + "/","venkat");
//     axios.post("http://192.168.4.33:8050/api/ticket/" + obj1.id + "/", {"Admin_comment":"venkat"})
//       .then(res => {
//         console.log(res, "osman ")
//           setapi(res.data)       
//       })

//     setShow(false)


//   }
//   console.log(note);


//   console.log(obj);
const handleClick=()=>{
console.log(show)
   const commentData= data1.map((e, i) => {
      if(e.id === show.clickedId){
        e.Admin_comment=note
        return e
      }
      return e

    })
    
    console.log(commentData)
    setdata1(commentData)

    setShow({clickedId:'',showPopup:false})
    

  }
//   const handleSubmit = (e,index) => {
 
// setNote('')
//     setShow({clickedId:e.id,showPopup:true})
//   }
  return (
    <div>
      <h2>Welcome to Admin page:{username}</h2>
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
            {/* <th>Accept/Reject</th> */}
            <th>Status</th>
            <th>request_raised_at</th>
            <th>complete</th>
            {/* <th>Admin_comment</th>
            <th>Mgr_comment</th>
            <th>Add Comment</th> */}
          </tr>
        </thead>
        <tbody>
          {data1.map((e, index) => (
            <tr>
              <td>{e.user}</td>
              <td>{e.ticket_no}</td>
              <td>{e.Subject}</td>
              <td>{e.Severity}</td>
              <td>{e.Type}</td>
              <td>{e.Report_To}</td>
              <td>{e.Remarks}</td>
              <td>{e.Status}</td>
              <td>{e.request_raised_at}</td>
               <td ><button class="btn btn-success"onClick={() => handleSubmit(e)}>Complete</button></td>
            </tr>

          ))}

        </tbody>
      </Table>

      <div>
        <div>{note}
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <input type="text" value={note} onChange={(e) => setNote(e.target.value)}></input>
              <button onClick={handleClick}>submit</button>
            </Modal.Body>

          </Modal>
        </div>
      </div>


    </div>
  )
}

export default NewAdmin
