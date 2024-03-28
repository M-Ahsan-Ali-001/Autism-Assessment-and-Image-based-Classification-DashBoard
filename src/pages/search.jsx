import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";
import { Chart } from "react-google-charts";
function SR() {


// useEffect(()=>{
//   const fetchData22 = async (id) => {
   
//     try {
//       const response = await axios.post(
//         "https://dashborad-autism.netlify.app/.netlify/functions/display_aq_10",
//         {
//         id: `${id}`,
      
//         }
      
//       );


//       let x=response.data;
//       console.log("x"+x)
//       let dx=[["id","score"]]
//       x.map((itm,idx)=>{

//         dx.push([itm._id,itm.score,])

//       })

//       console.log(dx)

//      setData1(dx)


      
//     } catch (error) {
//       console.log(error);
//     } finally {
     
//     }
//   };

//   const fetchData33 = async (id) => {
   
//     try {
//       const response = await axios.post(
//         "https://dashborad-autism.netlify.app/.netlify/functions/display_adhd",
//         {
//         id: `${id}`
//         },
      
//       );


//       let x=response.data;
//       console.log("x"+x)
//       let dx=[["id","score"]]
//       x.map((itm,idx)=>{

//         dx.push([itm._id,itm.score,])

//       })

//       console.log(dx)

//      setData2(dx)


      
//     } catch (error) {
//       console.log(error);
//     } finally {
     
//     }
//   };
// fetchData22("6588365393de3abc05f4ef2c");
// fetchData33("6588365393de3abc05f4ef2c");
// },[]) 
  const [data1, setData1] = useState(["id","score"]);
 
  const [data2, setData2] = useState(["id","score"]);
   
  const [data3, setData3] = useState(["id","score","State"]);
  const fetch= ()=>{

    const x = document.getElementById('bodyS');
   
    const y = document.getElementById('field_S');
    
    fetchData1(y.value);
       
    fetchData2(y.value);
       
    fetchData3(y.value);
     x.style.visibility = "visible";
  }
  const fetchData1 = async (id) => {
   
    try {
      const response = await axios.post(
        "https://dashborad-autism.netlify.app/.netlify/functions/display_aq_10",
        {
        id: `${id}`,
        password:"__*9"
        },

      
      );


      let x=response.data;
      console.log("x"+x)
      let dx=[["id","score"]]
      x.map((itm,idx)=>{

        dx.push([itm._id,itm.score,])

      })

      console.log(dx)

     setData1(dx)


      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const fetchData2 = async (id) => {
   
    try {
      const response = await axios.post(
        "https://dashborad-autism.netlify.app/.netlify/functions/display_adhd",
        {
        id: `${id}`
        },
      
      );


      let x=response.data;
      console.log("x"+x)
      let dx=[["id","score"]]
      x.map((itm,idx)=>{

        dx.push([itm._id,itm.score])

      })

      console.log(dx)

     setData2(dx)


      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const fetchData3 = async (id) => {
   
    try {
      const response = await axios.post(
        "https://dashborad-autism.netlify.app/.netlify/functions/display_model",
        {
        id: `${id}`
        },
      
      );


      let x=response.data;
      console.log("x"+x)
      let dx=[["id","score",'state']]
      x.map((itm,idx)=>{

        dx.push([itm._id,itm.score,itm.state])

      })

      console.log(dx)

     setData3(dx)


      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };



  const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 10,
    height:"500px",
     };


     const data4 = [
        ["x", "User Sessions"],
        ["mon", 0, ],
        [1, 10],
        [2, 23],
        [3, 17],
        [4, 18],
        [5, 9],
        [6, 11],
        [7, 27],
      ];

      const options4 = {
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Time(mins)",
        },
        series: {
          1: { curveType: "function" },
        },
      };

  return (
    <div>
      <h1>Search User</h1>


      <div>
        <input placeholder="Enter User Id Here...." id="field_S"/>
        <button id="buttonS" onClick={fetch}>Search</button>
      </div>

      <div id="bodyS">

      <div id="Line-chart">

<Chart
      chartType="LineChart"
      width="100%"
      height="500px"
      data={data4}
      options={options4}
    />
</div>

      <div id="divHolder">

<div id="tb1">
<h2 id="header_">Aq10</h2>
<Chart
    chartType="Table"
    width="100%"
    height="400px"
    data={data1}
    options={options2}
  />
</div>

<div id="tb1">
<h2 id="header_">ADHD</h2>
<Chart
  chartType="Table"
  width="100%"
  height="400px"
  data={data2}
  options={options2}
/>
</div>


<div id="tb2">
<h2 id="header_">Model</h2>

<Chart
  chartType="Table"
  width="100%"
  height="400px"
  data={data3}
  options={options2}
/>
</div>









</div>
      </div>
     
    </div>
  );
}

export default SR;
