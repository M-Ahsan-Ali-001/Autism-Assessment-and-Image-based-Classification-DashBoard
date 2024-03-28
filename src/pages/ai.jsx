import React, { useEffect, useState } from "react";
import { CircularProgress, Button } from "@mui/material";
import axios from "axios";

function AI() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const password = {
    password: "___*79"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/model_controller",
          password
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  // Logic to paginate data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>AI Model Results</h1>
      {loading ? (
        <div style={{ width: "50px", margin: "auto" }}>
          <CircularProgress size={50} />
        </div>
      ) : (
        <div>
          <table id="table">
            <thead>
              <tr id="row-table">
                <th id="cell-row-table" className="heading">
                  id
                </th>
                <th id="cell-row-table" className="heading">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((obj, index) => (
                <tr id="row-table" key={index}>
                  <td id="cell-row-table">{obj.user_id}</td>
                  <td id="cell-row-table">{obj.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              Previous Page
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextPage}
            >
              Next Page
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AI;
