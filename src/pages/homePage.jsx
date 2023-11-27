import React from "react";
import Sidebar from "../components/side_bar";
import Body from "../components/body";
import { useState } from "react";
function HomePage({setLogin}){

  const listButtons = ["Dashboard", "Users", "AQ_10", "AI","ADHD"];

  let choice=document.getElementById("Dashboard")
  const [butD,setbutD] =React.useState("Dashboard")
return(

<div id="home-page">
<Sidebar butD={butD} setbutD={setbutD}/>
<Body condi={butD} setLogin={setLogin}/>
</div>


)

}



export default HomePage;