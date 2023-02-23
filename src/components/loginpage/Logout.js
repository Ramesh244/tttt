import axios from 'axios'
import React, { useState } from 'react'

function Logout() {

    const[username,setusername] = useState('')
    const[password,setPassword] = useState('')
    
    const obj={
        username:username,
        password:password
    }

    axios.post("http://192.168.4.33:8050/api/logout/",obj)

  return (
    <div>
      <h1>Logout successfull</h1>
    </div>
  )
}

export default Logout
