import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, FormSelect } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Ticketraised.css'

function TicketRaisedForm() {

    const [id, setId] = useState('')
    const [Subject, setSubject] = useState('')
    const [type, setType] = useState([])
    const [Remarks, setRemarks] = useState('')
    const [Report_To, setReportTo] = useState('')
    const [status, setStatus] = useState([])
    const [value, setValue] = useState([])
    const [manager, setManager] = useState([])
    const [severity, setSeverity] = useState([])
    const [severityvalue, setSeverityvalue] = useState('')
    const [typeValue, setTypevalue] = useState('')
    const [Mangervalue, setMangervalue] = useState('')
    const [statusvalue, setStatusvalue] = useState('')
    const [count, setCount] = useState(0)
    const info = useSelector((state) => state.display.data)
    console.log(info, "iam 25th line")
    const [username, setusername] = useState(info);


    const handleClick = (e, pra) => {


        e.preventDefault();


        let obj = {
            Subject: Subject,
            Severity: severityvalue,
            Type: typeValue,
            Report_To: Mangervalue,
            Remarks: Remarks,
            Status: statusvalue,
            user: username
        }
        console.log(obj, "iam 55th line");
        axios.post('http://192.168.4.33:8050/api/ticket/', obj)
            .then(resp => console.log(resp, "venkat"));
        setSubject("");
        setRemarks('')
        if (pra == "hello") {
            setSeverity([]);
            setManager([]);
            setStatus([]);
            setType([])
            axios.get("http://192.168.4.33:8050/api/manager/").then(res => setManager(res.data))
            axios.get("http://192.168.4.33:8050/api/severity/").then(res => setSeverity(res.data))
            axios.get("http://192.168.4.33:8050/api/type/").then(res => setType(res.data))
            axios.get("http://192.168.4.33:8050/api/status/").then(res => setStatus(res.data))

        }
        if(manager=="OILC_Manager"){
            
        }


    }

    useEffect(() => {
        axios.get("http://192.168.4.33:8050/api/ticket/").then(resp => setValue(resp.data))
        axios.get("http://192.168.4.33:8050/api/manager/").then(res => setManager(res.data))
        axios.get("http://192.168.4.33:8050/api/severity/").then(res => setSeverity(res.data))
        axios.get("http://192.168.4.33:8050/api/type/").then(res => setType(res.data))
        axios.get("http://192.168.4.33:8050/api/status/").then(res => setStatus(res.data))

    }, [])
    console.log(value)
    console.log(typeof severity, severity, "33333333333");
    console.log(manager, "@@@@@@@@@@@@@@");
    console.log(type, "##############");

    console.log(severityvalue, typeValue, Mangervalue, statusvalue, "iam 23 line")


    return (
        <div className='container'>

            <form className='form-group' >
                <div className='ddd'>
                    <h2 className='heading'>Please raise your concern here...!</h2>
                    <div className="form-group mt-3">
                        <label>Subject:</label>
                        <input type="name" className="form-control mt-1" placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                            value={Subject}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Severity:</label>
                        <FormSelect aria-label="Default select example"
                            onChange={(e) => setSeverityvalue(e.target.value)}>
                            <option >Select menu</option>
                            {severity.map((e) => (

                                <option value={e.severity}>{e.severity}</option>

                            ))}

                        </FormSelect>
                    </div>
                    <div className="form-group mt-3">
                        <label>Type:</label>
                        <FormSelect aria-label="Default select example"
                            onChange={(e) => setTypevalue(e.target.value)}>

                            <option>Select type</option>
                            {type.map((e) => (
                                <option value={e.type}>{e.type}</option>
                            ))}
                            
                        </FormSelect>
                    </div>
                    {/* <div className="form-group mt-3">
                        <label>user</label>
                        <input type="text" value={info}></input>
                    </div> */}
                    <div className="form-group mt-3">
                        <label>Report To:</label>
                        <FormSelect aria-label="Default select example"
                            onChange={(e) => setMangervalue(e.target.value)}>
                            <option>Select_manager</option>
                            {manager.map((e) => (
                                <option value={e.manager}>{e.manager}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="form-group mt-3">
                        Remarks:
                        <textarea id="text" name="text" rows="5" cols="50"
                            value={Remarks}
                            onChange={(e) => { setRemarks(e.target.value) }} />
                    </div>

                    {/* <div className="form-group mt-3">
                        <label>Status:</label>
                        <FormSelect aria-label="Default select example"
                            onChange={(e) => setStatusvalue(e.target.value)}
                            value={status}>
                                
                            {status.map((e) => (
                                <option value={e.status}>{e.status}</option>
                            ))}

                        </FormSelect>
                    </div> */}

                    <div className="form-group mt-3">

                        {/* <Link to='/userpage' */}
                        {/* // state={{ data: [{ subject: subject, severity: severity, type: type, manager: manager, remark: remark, }] }} */}
                        {/* > */}
                        <button className='btn btn-success' onClick={(e) => { handleClick(e, "hello") }}>Raise Request</button>
                        {/* </Link> */}

                    </div>
                </div>
                
            </form>

            <div className='mt-3'>
            <Link to="/userpage"><span><button class="btn btn-success">Back</button></span></Link>
            </div>
        </div>

    )
}

export default TicketRaisedForm
