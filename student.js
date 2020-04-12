import React from 'react';

import './student.css'
import { Link, Redirect } from 'react-router-dom'
import Data from './studentData.json';
import Header from './header';

class Student extends React.Component{
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
              <h1 className="text">Your details</h1>
              {Data.map((item,index) => {
              let path = this.props.location.pathname
             let id = path.slice(9)
             console.log(id)
              if(id === item.id){
                  return(
                  <>
                 
          <Link to='/logout'><button className='button '>Logout</button></Link>
          <hr />
          
          
          <table id='students'>
              <tr>
                  <th>Id</th>
                  <td>{item.id}</td>
              </tr>
              <tr>
                  <th>Name</th>
                  <td>{item.name}</td>
              </tr>
              
              <tr>
                  <th>Email</th>
                  <td>{item.email}</td>
              </tr>
              <tr>
                  <th>Contact</th>
                  <td>{item.contact}</td>
              </tr>
              <tr>
                  <th>Address</th>
                  <td>{item.address}</td>
              </tr>
              
          </table>
                  </>
          )  
        }
        }) 
        }
        
            </div>

        
          );
    }
}

export default Student;


