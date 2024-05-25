import React from "react";
import GeoChartImage from '../images/GEOCHART.png';
import LN1Image from '../images/LINE CH1.png';
import Ttab from '../images/charts.png';
import Ttab1 from '../images/Tablesins.png';
import srch from '../images/Search.png';
import srchta from '../images/LINE CH2.png';
function Instruction(){


    return(

        <div id="dash">
        <p id="head-dash">User Guide</p>
        <div id="cardholdit">
        <div id="card-1">
            
            <img src={GeoChartImage}  width={"900px"}/>
        </div>
        <div id="card-2">

            <p>This is the <b>GeoChart</b>, it shows the total numbers of users from different countries using our mobile application.
             When you move the cursor on the area where colour is different it will show the country name and total number of users from that country.
              On the bottom Left you can see minimum and maximum users from different countries    </p>
        </div>


        </div>
<br/>
<br/>
        <div id="cardholdit">
        <div id="card-1">
            
            <img src={LN1Image}  width={"700px"}/>
        </div>
        <div id="card-2">

            <p>This is the <b>Line Chart</b>, it shows the total numbers of users who  signed up using our mobile application in the years 2023 and 2024. 
            It shows the months and date when users have signed in. 
            Admin can hover over the dots on the line chart to view an individual signup date.   </p>
        </div>


        </div>
        <br/>
<br/>


<div id="cardholdit">
        <div id="card-1">
            
            <img src={Ttab}  width={"700px"}/>
        </div>
        <div id="card-2">

        <p>This is the <b>Card View</b>, it shows the total numbers of users who have taken AQ_10, ADHD and AI test   </p>
        </div>


        </div>

        <br/>
<br/>


<div id="cardholdit">
        <div id="card-1">
            
            <img src={Ttab1}  width={"700px"}/>
        </div>
        <div id="card-2">

        <p>This is the <b>Table View</b>, Admin can check the result AQ_10, ADHD and AI tests taken by users and also the user information such as  Email and account creation date.
        AQ_10 and ADHD score have some criteria scores greater than equalt to 6 means user need visit a doctor and model score  shows the percentage of autism a person have.
           </p>
        </div>


        </div>


        <br/>
<br/>


<div id="cardholdit">
        <div id="card-1">
            
            <img src={srch}  width={"700px"}/>
        </div>
        <div id="card-2">

        <p>This is the <b>Search Area</b>, Admin can check the result AQ_10, ADHD and AI tests of a particular users and also the
         user, admin can also check each user session of the mobile app
           </p>
        </div>


        </div>


        <br/>
<br/>


<div id="cardholdit">
        <div id="card-1">
            
            <img src={srchta}  width={"700px"}/>
        </div>
        <div id="card-2">

        <p>This is the <b>Line Graph 2</b>, Admin can check the result AQ_10, ADHD and AI tests of all the users, admin can hover over lines and view the result. 
           </p>
        </div>


        </div>
        <br/>
<br/>
        </div>
    );
}
export default Instruction;