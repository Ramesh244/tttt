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
  console.log(info, "iam 25th line")
  const [username, setUserName] = useState(info)

  const [data, setData] = useState([])
  const [show, setShow] = useState({clickedId:'',showPopup:false});
  const handleClose = () =>     setShow({clickedId:'',showPopup:false});


  useEffect(() => {
    axios.get("http://192.168.4.33:8050/api/ticket/")
      .then(response =>
        setdata1(response.data)
      )
  }, [])
  // console.log(data1, "@@@@##### ");
  // const handleInput = () => {
  //   setShow(true)
  //   let val = { ...note };
  //   setNote(val)
  // }
  const handleClick = () => {
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
  const handleSubmit = (e,index) => {
 
setNote('')
    setShow({clickedId:e.id,showPopup:true})
  }
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
            <th>Admin_comment</th>
            <th>Mgr_comment</th>
            <th>Add Comment</th>
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
              <td>{e.Admin_comment}</td>
              <td>{e.Mgr_comment}</td>
              <td onClick={() => handleSubmit(e,index)}>Submit</td>
            </tr>

          ))}

        </tbody>
      </Table>

      <div>
        <div>{note}
          <Modal show={show.showPopup} onHide={handleClose}>
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
