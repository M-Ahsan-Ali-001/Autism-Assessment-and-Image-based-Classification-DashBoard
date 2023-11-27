import React from "react";
import Mainlog from "../images/Mainlog0.png"


function Sidebar({butD,setbutD}) {



  const listButtons = ["Dashboard", "Users", "AQ_10", "AI","ADHD"];

  let choice=document.getElementById("Dashboard")
  return <div id="side-bar" >
<div id="image-sidebar">

<img id="imageSide"src={Mainlog} alt="logo"></img>
</div>
<div id="heading-sidebar">
<p>Autism Assessment and Image-based Classification App Dashboard</p>
</div>

<div id="sidebar-buttons">

{listButtons.map(objectss=>(
<ul>
<nav>
  
<div id={objectss}className='li-buttons' onClick={(ev)=>{
setbutD(objectss)

let ch=document.getElementById(ev.currentTarget.id) 
listButtons.forEach((obj)=>{
  if(obj== ev.currentTarget.id){
    ch.style.backgroundColor="#4c5680"


  }
  else{
    let h=document.getElementById(obj) 
    
    h.style.backgroundColor="transparent"

  }
}) 
  
}}><li id={objectss}> {objectss} </li></div>


</nav>
</ul>

))}

</div>


  </div>;
}


export default Sidebar;
