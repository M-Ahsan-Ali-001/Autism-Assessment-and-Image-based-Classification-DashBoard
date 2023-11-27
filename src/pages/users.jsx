import React, { useEffect ,useState} from "react";
import axios from "axios";



function Users(){
    const [get, setGet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('');
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
        <div id="dashB">
            <h1>Users</h1>
            <table id="table">

            <tr id="row-table"> 
                    <td id="cell-row-table" className="heading"> id</td>
        
                    <td  id="cell-row-table" className="heading"> Email</td>
                  

                   </tr>



                {get.map((obj)=>(
               
                      <tr id="row-table"> 
                    <td id="cell-row-table"> {obj["_id"]}</td>
        
                    <td  id="cell-row-table"> {obj["email"]}</td>
            

                   </tr>
                  
                 
                  

                ))}
         
            </table>
        </div>
    )
}


export default Users;