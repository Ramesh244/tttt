import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './TicketTable.css'


function TicketTable() {

    const location=useLocation()
    const{details}=location.state
    console.log(details)
        // console.log(data1);
    return (
        <div class="table-wrapper" >
            <Table class="fl-table">
                <thead>
                    <tr>
                        <th>user</th>
                        <th>Ticket_no</th>
                        <th>Subject</th>
                        <th>Severity</th>
                        <th>Type</th>
                        <th>Report To</th>
                        <th>Remarks</th>
                        <th>Status</th>
                        <th>Request_raised_at</th>
                        {/* <th>Admin_comment</th>
                        <th>Mgr_comment</th> */}
                    </tr>
                </thead>
                <tbody>
                    {details.map((e)=>(
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
                        {/* <td>{e.Admin_comment}</td>
                        <td>{e.Mgr_comment}</td> */}
                       </tr> 
                    ))}
                </tbody>
            </Table>
            
        </div>
    )
}

export default TicketTable


