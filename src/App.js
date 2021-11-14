
import './App.css';
import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import { useState } from 'react';
import { Home } from './home/home';

const responsegoogle = response =>{
  console.log(response);
};

function App() {
  const [mail, setmail] = useState("");
  const [psw, setpsw] = useState("");

  function signup() {
    console.log("Email:", mail);
    console.log("password:", psw);
  }

  function changemail(event) {
    setmail(event.target.value);
  }
  function changepsw(event) {
    setpsw(event.target.value);
  }
  function Login() {
    console.log("sign up");
  }
  
  
  return (
    <div className="App">       
     <img src="https://i.ibb.co/v3h1yvh/logo.png" alt="logo" className="logo1"/>
     <div className="login">
      <input type="text" placeholder="Email" onChange={changemail} value={mail}/>
      <input type="password" placeholder="Password" onChange={changepsw} value={psw}/>
      <button className="signup" onClick={signup}>Sign Up</button>
      <br/>
      <p>----------- or -----------</p>
     <br/>
      <BrowserRouter>
     <Routes> 
      <Route path="/"  exact/>
      <Route path="/home" component={Home} exact/>
   </Routes>
   <Link to="/home">
   <GoogleLogin
     clientId="352156302723-65j3qot7g1ts1jgofq3f44dt8tqba9gi.apps.googleusercontent.com"
     onSuccess={responsegoogle}
     onFailure={responsegoogle}
     onClick={Login}/>
     </Link>
   </BrowserRouter>
      
      
     
      </div>
  
   

    </div>
  );
}

export default App;
