import React, { useEffect, useState } from "react";
import HomePage from "./homePage";
import Mainlog from "../images/Mainlog0.png"
import { useCookies } from 'react-cookie';
function Login() {


  
  const [logins, setLogin] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  let a = 0

  useEffect(() => {

    console.log(cookies.login);
    console.log(cookies.email);
    console.log(cookies.pass);
    if (cookies.login === true && cookies.email === "admin123@asddetector.com" && cookies.pass === "admin123_") {
      setLogin(true);
    }
    console.log(logins)
  }, [cookies]);
  const checkLogin=()=>{
    let email = document.getElementById("ipt1").value
    let pass = document.getElementById("ipt2").value

    

    if(email === "admin123@asddetector.com" && pass === "admin123_" ){
      
        setLogin(true)
        console.log(cookies.login)
        setCookie('login', true, { path: '/' });
        setCookie('email', email, { path: '/' });
      setCookie('pass', pass, { path: '/' });

    }
    else{
        alert("wrong credentials")
        
    }

  }

  return (
    <div>
      {logins === false ? (
        <div id="body-login">
          <div id="card-login">
            <div id="card-hold">

             <img id="imageLogin"src={Mainlog} alt="logo"></img>
            <p id="text-log">Autism Assessment and Image-based Classification App </p>
            <p id="text-log">Admin panel</p>
            <br></br>
           <form id="form-login">
           <input id="ipt1" className="input-username" placeholder="Your Email..." type="email" required="true"></input>
            <br></br>
            <input id="ipt2" className="input-username" placeholder="Your Password..." type="password" required="true"></input>
            <br></br>

            <input  id="button-login"  type="submit" value="Submit" onClick={checkLogin}></input>

           </form>

            </div>
          </div>
        </div>
      ) :  logins === true  ? (
        <HomePage setLogin={setLogin}/>
      ) : null}
    </div>
  );
}

export default Login;
