

import './App.css';
import Body from './components/Home/Body';
import SignUp from './components/Signup/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeNav from './components/NavBar/HomeNav';
import SignIn from './components/loginpage/SignIn';
import TicketRaisedForm from './components/TicketRaised/TicketRaisedForm';
import UserPage from './components/TicketRaised/UserPage/UserPage';
import AdminPage from './components/Admin/AdminPage';
import ManagerPage from './components/ManagerPage/ManagerPage';
import TicketTable from './components/TicketRaised/UserPage/TicketTable';
import DeployedManager from './components/ManagerPage/DeployedManager';
import { useState } from 'react';
import NewAdmin from './components/Admin/NewAdmin';
import NewMan from './components/ManagerPage/NewMan';
import NewDep from './components/ManagerPage/NewDep';
import Logout from './components/loginpage/Logout';
import AdminNav from './components/NavBar/AdminNav';
import ManagerNav from './components/NavBar/ManagerNav';
import DeployedNav from './components/NavBar/DeployedNav';
import AdminComment from './components/Admin/AdminCommnet';


function App() {
  const [isUser, setIsUser] = useState(false);
  const [isStaff, setStaff] = useState(false);
  const [resp,setResp]=useState("")
  const details = (e, a, b) => {
    setIsUser(e)
    setStaff(a)
    setResp(b)
    console.log(isUser, "@@@@", isStaff,"@@@@@",resp);

  }
  return (
    <div className="App">


      {/* { */}
        {/* // !isUser && !isStaff ? */}
          <Router>
            <HomeNav />
            <Routes>
              <Route exact path='/' element={<Body />} />
              <Route exact path='/signin' element={<SignIn details={details} />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/userpage' element={<UserPage />} />
              <Route exact path='/RaiseTicket' element={<TicketRaisedForm />} />
              <Route exact path='/TicketTable' element={<TicketTable />} />
              <Route exact path='/Logout' element={<Logout />} />
              <Route exact path="/admin" element={<NewAdmin />} />
              {/* <Route exact path="/deployed" element={<NewDep />} /> */}
              <Route exact path="/manager" element={<NewMan />} />
            </Routes>
          </Router>



          {/* : isUser && isStaff ? */}
            {/* <Router>
              <AdminNav />
              <Routes>
                 <Route exact path='/' element={<Body />} /> 
                <Route exact path="/" element={<NewAdmin />} />
                <Route exact path='/signin' element={<SignIn details={details} />} />
                <Route exact path='/Logout' element={<Logout />} />
                <Route exact path='/adminpage' element={<NewAdmin />} />
                <Route exact path="/manager" element={<NewMan />} />
                <Route exact path="/" element={<NewDep />} />

              </Routes>
            </Router> */}
            {/* : !isUser && isStaff ?
              <Router>
                <ManagerNav />
                <Routes>
                  {/* <Route exact path='/' element={<Body />} /> */}
                  {/* <Route exact path="/" element={<NewMan />} />
                  <Route exact path="/manager" element={<NewMan />} />
                  <Route exact path='/signin' element={<SignIn details={details} />} />
                  <Route exact path='/Logout' element={<Logout />} />
                </Routes> */}
              {/* </Router> */}
              {/* : */}
              {/* <Router>
                <DeployedNav />
                <Routes> */}
                  {/* <Route exact path='/' element={<Body />} /> */}
                  {/* <Route exact path="/" element={<NewDep />} />
                  <Route exact path='/signin' element={<SignIn details={details} />} />
                  <Route exact path='/Logout' element={<Logout />} />
                </Routes> */}


              {/* </Router>  */}
      {/* } */}
    </div>
  );
}

export default App;
