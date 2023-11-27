import React, { useEffect, useState } from "react";
import HomePage from "./homePage";
import Mainlog from "../images/Mainlog0.png"
function Login() {
  const [logins, setLogin] = useState(false);
  let a = 0
  const checkLogin=()=>{
    let email = document.getElementById("ipt1").value
    let pass = document.getElementById("ipt2").value

    if(email === "admin123@asddetector.com" && pass === "_12@`" ){
      
        setLogin(true)
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
      ) : logins === true ? (
        <HomePage setLogin={setLogin}/>
      ) : null}
    </div>
  );
}

export default Login;
