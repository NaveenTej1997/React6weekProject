import React from 'react';

import './student.css'
import studentData from './studentData.json';

import { Link, Redirect } from 'react-router-dom'
import Header from './header';


class Admin extends React.Component {
    constructor(props){
      super(props)
      const token = localStorage.getItem("token")
      let loggedIn = true
      if(token == null){
        loggedIn = false
      }
      this.state = {
        loggedIn
      }
    }
  render(){
    if(this.state.loggedIn === false){
      return <Redirect to="/" />
    }
  return (
    <div className="Admin">
      <Header/>
  <h3 className='text'>Welcome Admin</h3>
      <Link to='/logout'><button className='button'>Logout</button></Link>
      <br />
      <h1 className='text'>Student Details</h1>
      <table id='students'> 
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              
              <th>Details</th>
          </tr>
      
      {studentData.map((item, index) => {
        
          return(
        <tr key={item.id}>
          <td>{item.id}</td>                        
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>{item.address}</td>
         
          <td><Link to={`/student/${item.id}`}><button className='button'>Details</button></Link></td>
        </tr>
        )
        
      }
        )}
    </table>
      
    </div>
  );
    }
}

export default Admin;
