import React, { useEffect,useState } from "react";

import axios from "axios";
function ADHD(){

    const [get, setGet] = useState([]);
    axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('',{
              headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
              },
            });
            setGet(response.data);
            console.log(response.data)
          } catch (error) {
           console.log(error)
          } finally {
            console.log("error")
          }
        };
    
        fetchData();
      }, []);
    return(
        <div>
 <h1>ADHD  Results</h1>
            <table id="table">

            <tr id="row-table"> 
                    <td id="cell-row-table" className="heading"> id</td>
        
                    <td  id="cell-row-table" className="heading"> Score</td>
                  

                   </tr>



                {get.map((obj)=>(
                   <tr id="row-table"> 
                    <td id="cell-row-table"> {obj["_id"]}</td>
        
                    <td  id="cell-row-table"> {obj["result_score"]}</td>
                  

                   </tr>

                ))}
            </table>
        </div>
    )
}


export default ADHD;