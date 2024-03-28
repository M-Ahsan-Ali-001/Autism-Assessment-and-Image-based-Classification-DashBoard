import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";
import { Chart } from "react-google-charts";

function Users() {

  const [loading, setLoading] = useState(true);


const [datax, setDatax] = useState(["id","Email","Accoutn Created On"]);
const [data2, setData2] = useState(["id","score"]);
const [data3, setData3] = useState(["id","score"]);
const [data4, setData4] = useState(["id","score"]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/user_controller",
          {
            password: "___*79"
          }
        );
 

        let x=response.data;
        let dx=[["id","Email","Accoutn Created On"]]
        x.map((itm,idx)=>{

          dx.push([itm.user_id,itm.email,Trimdate(itm.date)])

        })

        console.log(dx)

       setDatax(dx)


        
      } catch (error) {
        console.log(error);
      } finally {
      
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/aq_10_controller",
          {
            password: "___*79"
          }
        );
 

        let x=response.data;
        let dx=[["id","score"]]
        x.map((itm,idx)=>{

          dx.push([itm.user_id,itm.score,])

        })

        console.log(dx)

       setData2(dx)


        
      } catch (error) {
        console.log(error);
      } finally {
       
      }
    };


    const fetchData3 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/adhd_controller",
          {
            password: "___*79"
          }
        );
 

        let x=response.data;
        let dx=[["id","score"]]
        x.map((itm,idx)=>{

          dx.push([itm.user_id,itm.score,])

        })

        console.log(dx)

       setData3(dx)


        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };


    const fetchData4 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/model_controller",
          {
            password: "___*79"
          }
        );
 

        let x=response.data;
        let dx=[["id","score"]]
        x.map((itm,idx)=>{

          dx.push([itm._id,itm.score,])

        })

        console.log(dx)

       setData4(dx)


        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };



    

    fetchData();
    fetchData2 ();
    fetchData3 ();
    fetchData4 ();
  }, []);

  const Trimdate = (date) => {
    const regexPattern = /^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{4}/;
    const matches = date.match(regexPattern);

    if (matches) {
      return matches[0];
    } else {
      return "Invalid Date";
    }
  };


  const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 10,
    height:"500px",
     };

  return (
    <div id="dashB">
      <h1>Users  Data</h1>
      {loading ? (
        <div style={{ width: "50px", margin: "auto" }}>
          <CircularProgress size={50} />
        </div>
      ) : (
       
        
      <div>
  <div id="divHolder">

  <div id="tb1">
<h2 id="header_">Users</h2>
  <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={datax}
      options={options2}
    />
  </div>

  <div id="tb1">
<h2 id="header_">ADHD</h2>
<Chart
    chartType="Table"
    width="100%"
    height="400px"
    data={data3}
    options={options2}
  />
</div>


<div id="tb2">
<h2 id="header_">Model</h2>
  
<Chart
    chartType="Table"
    width="100%"
    height="400px"
    data={data4}
    options={options2}
  />
</div>

<div id="tb2">
<h2 id="header_">ADHD</h2>
    
<Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data2}
      options={options2}
    />
  </div>
 
  





</div>




  
      </div>
      )}



    </div>
  );
}

export default Users;
