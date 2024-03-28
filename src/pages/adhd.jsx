import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";

function ADHD() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Change as per your requirement
  const tbodyRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/adhd_controller",
          {
            password: "___*79"
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Logic to get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (tbodyRef.current) {
      // Clear tbody
      tbodyRef.current.innerHTML = "";

      // Render new rows
      currentItems.forEach(obj => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
      
        td1.id="cell-row-table"
        td1.textContent = obj.user_id;
        const td2 = document.createElement("td");
        td2.textContent = obj.score;
        td2.id="cell-row-table"
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbodyRef.current.appendChild(tr);
      });
    }
  }, [currentItems]);

  return (
    <div>
      <h1>AQ10 Results</h1>
      {data.length !== 0 ? (
        <>
          <table id="table">
            <thead>
              <tr id="row-table">
                <td id="cell-row-table" className="heading">
                  id
                </td>
                <td id="cell-row-table" className="heading">
                  Score
                </td>
              </tr>
            </thead>
            <tbody ref={tbodyRef} style={{}}></tbody>
          </table>
          {/* Pagination controls */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <Button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  style={{ margin: "0 5px" }}
                  variant={currentPage === index + 1 ? "contained" : "outlined"}
                >
                  {index + 1}
                </Button>
              )
            )}
          </div>
        </>
      ) : (
        <div style={{ width: "50px", margin: "auto" }}>
          <CircularProgress size={50} />
        </div>
      )}
    </div>
  );
}
export default ADHD;
