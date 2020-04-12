import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from './admin'
import Login from './login';
import Student from './student'
import Logout from './logout'
import App from './App'


ReactDOM.render(
  
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/App" component={App} />
        <Route path="/admin" component={Admin} />
        <Route path="/student" component={Student} />
        <Route path="/logout" component={Logout} />
      </Switch>
      </BrowserRouter>
  ,
  document.getElementById('root')
);
