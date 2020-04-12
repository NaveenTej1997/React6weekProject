import React from 'react';
import './student.css'
import studentData from './studentData.json'

import {Link, Redirect } from 'react-router-dom'
import Header from './header';


class Login extends React.Component{
    constructor(props){
        super(props)
        let AloggedIn = false
        let SloggedIn = false

        this.state = {
            email: "",
            password: "",
            AloggedIn ,
            SloggedIn ,
            Admin:[],
            Student:[]
              
         }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    
    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
submitForm(e){
            e.preventDefault()
            {studentData.map((item, index) => {
            const { email, password } = this.state
        
            
                if(email === item.email && password === item.password && "student" === item.role){
                localStorage.setItem("token", "fsdfsdfrg")
                this.setState({
                    SloggedIn:true,
                    Student:item.id
                })
                
                }
                else if(email === item.email && password === item.password && "admin" === item.role){
                localStorage.setItem("token", "vghvhvhjh")
                this.setState({
                    AloggedIn:true,
                    Admin:item.id
                })
        }
})
            }
               
}


    render(){
            
        if(this.state.AloggedIn){
            return <Redirect to={`/admin/${this.state.Admin}`} />
            
        }
       else if(this.state.SloggedIn){
            return <Redirect to={`/student/${this.state.Student}`} />
        }
        return(
               
        <div className="Login">
                
            <div className=' forms'>
            <Header/>
            <br/>
                <br/>
                <br/>
                <form name = "myForm" onSubmit = {this.submitForm} className="boxfield">
                <h1 className='text'>Login</h1>
		            <label><span className="mail">Email:</span> </label>
		            <input className="inputfield" type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder='e.g: user@gmail.com' required /><br/>
                    <div className="EmailErr">{this.state.EmailErr}</div>
                    <label><span class="mail">Password:</span> </label>
		            <input className="inputfield" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br/>
                    <div className="EmailErr">{this.state.passwordErr}</div>
                    <button type="submit" className='button' >Login</button>
                    {/*<Link to='./student' > <button type="submit" className='myButton' >test</button></Link>*/}
                </form>
            </div>
        </div>
        )
    }
}

export default Login