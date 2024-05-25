import React from "react";
import "../styles/Styles.css";
import Dashboard from "../pages/dashborad"

import Users from "../pages/users"
import AQ_10 from "../pages/AQ_10"
import AI from "../pages/ai"
import ADHD from "../pages/adhd"
import { useCookies } from 'react-cookie';
import SR from "../pages/search";
import Instruction from "../pages/instruction";
function Body({condi,setLogin}) {

  const [cookies, setCookie] = useCookies(['user']);
  
  return (

    


    <div id="body-rout">
      
      <div
        id="login-button"
        onClick={() => {
          let p = document.getElementById("sub-bar");
          if (p.style.visibility == "hidden") {
            p.style.visibility = "visible";
          } else {
            p.style.visibility = "hidden";
          }
        }}
      >
        {" "}
        <p> Admin </p>
        <div id="sub-bar"  onClick={()=>{setLogin(false)
        
        setCookie('login', false, { path: '/' });
        setCookie('email', " ", { path: '/' });
      setCookie('pass', " ", { path: '/' });
      
      }
      
      }>
          <li>Logout</li>
        </div>
      </div>
      
      <div className="App">
     {condi === "Dashboard"?(<Dashboard />):condi === "Users"?(<Users/>):condi === "search"?(<SR/>):condi === "Instruction"?(<Instruction/>):null}


     

      </div>
    </div>
   
  );
}

export default Body;
