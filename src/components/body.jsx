import React from "react";
import "../styles/Styles.css";
import Dashboard from "../pages/dashborad"

import Users from "../pages/users"
import AQ_10 from "../pages/AQ_10"
import AI from "../pages/ai"
import ADHD from "../pages/adhd"
function Body({condi,setLogin}) {

  
  
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
        <div id="sub-bar"  onClick={()=>{setLogin(false)}}>
          <li>Logout</li>
        </div>
      </div>
      
      <div className="App">
     {condi === "Dashboard"?(<Dashboard />):condi === "Users"?(<Users/>):condi === "AQ_10"?(<AQ_10/>):condi === "AI"?(<AI/>):condi === "ADHD"?(<ADHD/>):null}


     

      </div>
    </div>
   
  );
}

export default Body;
