import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './student.css'
import Header from './header'

export default class logout extends Component {
    constructor(props){
        super()
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
        
                <div >
                        <Header/>
                <h3 className="logout">You have been successfully logged out!</h3>
                <Link to="/" ><button className='button'>Back to Login</button></Link>
                </div>
            </div>
        )
    }
}
