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

const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState(["id","score"]);
  const [key, setKey] = useState(0);
  const itemsPerPage = 5;
  const [data2, setData2] = useState(["id","score"]);
   
  const [data3, setData3] = useState(["id","score","State"]);
  const [adhdData, setAdhdData] = useState([]);
  const [AQData, setAQData] = useState([]);
  const [ModelData, setModelData] = useState([]);
  const[data4,setDat4]=useState( [
    ["x", "User Sessions"],["mon",1]])
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

      setAQData(response.data.map((item) => ({ id: item.user_id || item._id, score: item.score })));

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
      
      setAdhdData(response.data.map((item) => ({ id: item.user_id || item._id, score: item.score })));

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


      const response2 = await axios.post(
        "https://dashborad-autism.netlify.app/.netlify/functions/use_time",
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


      setModelData(response.data.map((item) => ({ id: item.user_id || item._id, score: item.score , state:item.state})));

     setData3(dx)

     let u= [   ["x", "User Sessions"],]
     let dataSession= response2.data
     dataSession.map((itm,idx)=>{

      u.push([itm.date,Number(itm.time)])

     })

  if(dataSession.length){

    setDat4(u)

  }


     console.log("-------=>",u)


      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };

  
  const [currentAQPage, setCurrentAQPage] = useState(0);
  const [currentModelPage, setCurrentModelPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);


  const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 10,
    height:"500px",
     };



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




      // -------------------------


const handleNextPageAQ = () => {
  setCurrentAQPage(currentAQPage + 1);
  setKey(prevKey => prevKey + 1);
};

const handlePrevPageAQ = () => {
  setCurrentAQPage(currentAQPage - 1);
  setKey(prevKey => prevKey + 1);
};


const startIndexAQ = currentAQPage * itemsPerPage;
const endIndexAQ = startIndexAQ + itemsPerPage;
const currentItemsAQ = AQData.slice(startIndexAQ, endIndexAQ);

//-----------------------------

//


// -------------------------


const handleNextPageM = () => {
  setCurrentModelPage(currentModelPage + 1);
  setKey(prevKey => prevKey + 1);
};

const handlePrevPageM = () => {
  setCurrentModelPage(currentModelPage - 1);
  setKey(prevKey => prevKey + 1);
};


const startIndexM = currentModelPage * itemsPerPage;
const endIndexM = startIndexM + itemsPerPage;
const currentItemsM = ModelData.slice(startIndexM, endIndexM);

//-----------------------------


//-----------------------------
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = adhdData.slice(startIndex, endIndex);
const handleNextPage = () => {
  setCurrentPage(currentPage + 1);
  setKey(prevKey => prevKey + 1);
};

const handlePrevPage = () => {
  setCurrentPage(currentPage - 1);
  setKey(prevKey => prevKey + 1);
};

// -------------------------

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
        <div className="viewTab">

        <div id="tabb2">
            ,<h2>ADHD</h2>
             
             

           <table className="table-0">
  <thead id="tbHead">
    <tr>
      <th className="thT" >ID</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    {currentItems.map((item, idx) => (
      <tr key={item.id} className={idx % 2 === 0 ? "oddt" : "evenT"}>
        <td className="tdT">{item.id}</td>
        <td>{item.score}</td>
      </tr>
    ))}
  </tbody>
</table>
      <div >
      <button className="button_holder" disabled={currentPage === 0} onClick={handlePrevPage}>Prev</button>
      <button className="button_holder " disabled={endIndex >= adhdData.length} onClick={handleNextPage}>Next</button>
      </div>
    </div>







    
    <div id="tabb3">
            ,<h2>AQ-10</h2>
             
             

           <table className="table-0">
  <thead id="tbHead">
    <tr>
      <th className="thT" >ID</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    {currentItemsAQ.map((item, idx) => (
      <tr key={item.id} className={idx % 2 === 0 ? "oddt" : "evenT"}>
        <td className="tdT">{item.id}</td>
        <td>{item.score}</td>
      </tr>
    ))}
  </tbody>
</table>
      <div >
      <button className="button_holder" disabled={currentAQPage === 0} onClick={handlePrevPageAQ}>Prev</button>
      <button className="button_holder " disabled={endIndexAQ >= AQData.length} onClick={handleNextPageAQ}>Next</button>
      </div>
    </div>


    
    <div id="tabb4">
            ,<h2>Model(Scan)</h2>
             
             

           <table className="table-0">
  <thead id="tbHead">
    <tr>
      <th className="thT" >ID</th>
      <th>Score</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    {currentItemsM.map((item, idx) => (
      <tr key={item.id} className={idx % 2 === 0 ? "oddt" : "evenT"}>
        <td className="tdT">{item.id}</td>
        <td className="tdT">{item.score}</td>
        <td className="tdT2">{item.state}</td>
      </tr>
    ))}
  </tbody>
</table>
      <div >
      <button className="button_holder" disabled={currentModelPage === 0} onClick={handlePrevPageM}>Prev</button>
      <button className="button_holder " disabled={endIndexM >= ModelData.length} onClick={handleNextPageM}>Next</button>
      </div>
    </div>
        </div>

  












</div>
      </div>
     
    </div>
  );
}

export default SR;
