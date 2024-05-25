import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";
function Users() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [adhdData, setAdhdData] = useState([]);
  const [AQData, setAQData] = useState([]);
  const [ModelData, setModelData] = useState([]);
 
  // For ADHD table, we will display exactly 5 rows regardless of pagination
 
  const [key, setKey] = useState(0);
  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.post(url, {
          password: "___*79"
        });

        setData(response.data.map((item) => ({ id: item.user_id || item._id, score: item.score, state: item.state })));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataUsers = async (url, setData) => {
      try {
        const response = await axios.post(url, {
          password: "___*79"
        });

        setData(response.data.map((item) => ({ id: item.user_id || item._id, email: item.email, date: item.date, country: item.country })));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataUsers("https://dashborad-autism.netlify.app/.netlify/functions/user_controller", setUserData);
    fetchData("https://dashborad-autism.netlify.app/.netlify/functions/adhd_controller", setAdhdData);
    fetchData("https://dashborad-autism.netlify.app/.netlify/functions/aq_10_controller", setAQData);
    fetchData("https://dashborad-autism.netlify.app/.netlify/functions/model_controller", setModelData);
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentUPage, setCurrentUPage] = useState(0);
  
  const [currentAQPage, setCurrentAQPage] = useState(0);
  const [currentModelPage, setCurrentModelPage] = useState(0);

  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setKey(prevKey => prevKey + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    setKey(prevKey => prevKey + 1);
  };

// -------------------------


const handleNextPageU = () => {
  setCurrentUPage(currentUPage + 1);
  setKey(prevKey => prevKey + 1);
};

const handlePrevPageU = () => {
  setCurrentUPage(currentUPage - 1);
  setKey(prevKey => prevKey + 1);
};


const startIndexU = currentUPage * itemsPerPage;
const endIndexU = startIndexU + itemsPerPage;
const currentItemsU = userData.slice(startIndexU, endIndexU);

//-----------------------------
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = adhdData.slice(startIndex, endIndex);


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



  const Trimdate = (date) => {
    const regexPattern = /^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{4}/;
    const matches = date.match(regexPattern);

    if (matches) {
      return matches[0];
    } else {
      return "Invalid Date";
    }
  };
  return (
    <div key={key}>
      <h1>Users Data</h1>
      {loading ? (
         <div style={{ width: "50px", margin: "auto" }}>
         <CircularProgress size={50} />
       </div>
      ) : (
        <div >

<div id="tab11">
            ,<h2>Users</h2>
             
             

           <table className="table-0">
  <thead id="tbHead">
    <tr>
      <th className="thT" >ID</th>
      <th>Email</th>
      <th>Date</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    {currentItemsU.map((item, idx) => (
      <tr key={item.id} className={idx % 2 === 0 ? "oddt" : "evenT"}>
        <td className="tdT">{item.id}</td>
        <td className="tdT" >{item.email}</td>
        <td className="tdT" >{Trimdate(item.date)}</td>
        <td className="tdT2">{item.country}</td>
      </tr>
    ))}
  </tbody>
</table>
      <div className="bot_but">
      <button className="button_holder" disabled={currentUPage === 0} onClick={handlePrevPageU}>Prev</button>
      <button className="button_holder" disabled={endIndexU >= userData.length} onClick={handleNextPageU}>Next</button>
      </div>
    </div>


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
        <td >{item.score}</td>
    
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
        <td >{item.score}</td>

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
        <td  className="tdT2">{item.state}</td>
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
      )}
    </div>
  );
}

export default Users;
