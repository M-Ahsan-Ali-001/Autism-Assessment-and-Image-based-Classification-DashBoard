import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
import { Chart } from "react-google-charts";

function Dashboard() {
  const [get, setGet] = useState([]);
  const [getM, setGetM] = useState([]);
  const [getAQ, setGetAQ] = useState([]);
  const [getAD, setGetAD] = useState([]);
  const [options1,setOptions]  = useState({
    animationEnabled: true,
    title: {
      text: "New User",
    },
    axisY: {
      title: "New Users",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "2023",
        showInLegend: true,
        dataPoints: [
          { y: 105, label: "Jan" },
          { y: 15, label: "Feb" },
          { y: 12, label: "Mar" },
          { y: 18, label: "Apr" },
          { y: 12, label: "May" },
          { y: 10, label: "Jun" },
          { y: 16, label: "Jul" },
          { y: 19, label: "Aug" },
          { y: 13, label: "Sept" },
          { y: 28, label: "Oct" },
          { y: 14, label: "Nov" },
          { y: 25, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2024",
        showInLegend: true,
        dataPoints: [
          { y: 12, label: "Jan" },
          { y: 17, label: "Feb" },
          { y: 15, label: "Mar" },
          { y: 12, label: "Apr" },
          { y: 12, label: "May" },
          { y: 15, label: "Jun" },
          { y: 12, label: "Jul" },
          { y: 18, label: "Aug" },
          { y: 15, label: "Sept" },
          { y: 10, label: "Oct" },
          { y: 15, label: "Nov" },
          { y: 19, label: "Dec" },
        ],
      },
    ],
  });
  const password = {
    "password" : "___*79"
  }

  const extractDate1 = (fullDate) => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(4, 7); // Extracting "Sun Mar 17 2024"
  };

  const extractDate2 = (fullDate) => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(7, 10); // Extracting "Sun Mar 17 2024"
  };
  const extractDate3 = (fullDate) => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(11, 15); // Extracting "Sun Mar 17 2024"
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/user_controller",password
        );
        setGet(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("error");
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/model_controller",
          password
        );
        setGetM(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("error");
      }
    };

    const fetchData3 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/aq_10_controller",
          password
        );
        setGetAQ(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("error");
      }
    };

    const fetchData4 = async () => {
      try {
        const response = await axios.post(
          "https://dashborad-autism.netlify.app/.netlify/functions/adhd_controller",
          password
        );
        setGetAD(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("error");
      }
    };

    const FetchUser =async ()=>{

      let y214=[];
      
      let y213=[];

      try {
        const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/user_controller',
        {
          "password" : "___*79"
        });

        const x =response.data
       if(x.length >0){
        x.map(  (itm,index)=>{

          console.log(extractDate1(itm.date)+"--"+extractDate2(itm.date)+"--"+extractDate3(itm.date))
          if(extractDate3(itm.date) === "2023"){


            y213.push({y:Number(extractDate2(itm.date)),label:extractDate1(itm.date)})
          }
          else{
            y214.push({y:Number(extractDate2(itm.date)),label:extractDate1(itm.date)})
   


          }

        })

        console.log(y213)


        setOptions({
          animationEnabled: true,
          title: {
            text: "New User",
          },
          axisY: {
            title: "New Users",
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              type: "spline",
              name: "2023",
              showInLegend: true,
              dataPoints: y213,
            },
            {
              type: "spline",
              name: "2024",
              showInLegend: true,
              dataPoints: y214,
            },
          ],
        })
       }



   
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }



    }

FetchUser();
    fetchData();
    
    fetchData2();
    
    fetchData3();
    
    fetchData4();
  }, []);

  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;



  const options = {
    animationEnabled: true,
    title: {
      text: "New User",
    },
    axisY: {
      title: "New Users",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "2023",
        showInLegend: true,
        dataPoints: [
          { y: 15, label: "Jan" },
          { y: 15, label: "Feb" },
          { y: 12, label: "Mar" },
          { y: 18, label: "Apr" },
          { y: 12, label: "May" },
          { y: 10, label: "Jun" },
          { y: 16, label: "Jul" },
          { y: 19, label: "Aug" },
          { y: 13, label: "Sept" },
          { y: 28, label: "Oct" },
          { y: 14, label: "Nov" },
          { y: 25, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2024",
        showInLegend: true,
        dataPoints: [
          { y: 12, label: "Jan" },
          { y: 17, label: "Feb" },
          { y: 15, label: "Mar" },
          { y: 12, label: "Apr" },
          { y: 12, label: "May" },
          { y: 15, label: "Jun" },
          { y: 12, label: "Jul" },
          { y: 18, label: "Aug" },
          { y: 15, label: "Sept" },
          { y: 10, label: "Oct" },
          { y: 15, label: "Nov" },
          { y: 19, label: "Dec" },
        ],
      },
    ],
  };


  const data2 = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["pakistan", 700],
  ];
  const options2 = {
 

    backgroundColor: "#262b40",
    datalessRegionColor: "#a1999b",
    defaultColor: "red",
   

    borderRadius:"20%"
  };




  const data4 = [
    ["x", "AQ10", "ADHD","AI"],
    [0, 0, 0,0],
    [1, 10, 5, 5],
    [2, 23, 15, 5],
    [3, 17, 9, 5],
    [4, 18, 10, 5],
    [5, 9, 5, 5],
    [6, 11, 3, 5],
    [7, 27,0, 5],
  ];
  const options4 = {
    hAxis: {
      title: "Time",
    },
    vAxis: {
      title: "Popularity",
    },
    series: {
      1: { curveType: "function" },
    },
  };
  
  return (
    <div id="dash">
      <p id="head-dash">Dashboard</p>

      <div id="chart">
     <div id="chart1">
     <CanvasJSChart options = {options1}
				/* onRef={ref => this.chart = ref} */
			/>
     </div>

     <div id="chart2">
     <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data2[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      options={options2}
      
      data={data2}
    />
     </div>
      </div>

      <div id="card-holder">
        <div id="rowDash">
          <div id="box1">
            <h2>{getAQ.length}</h2>

            <h2>Total AQ_10<br/> Results</h2>
          </div>

          <div id="box2">
            <h2>{getAD.length}</h2>
            <h2  id="textBoxx">Total ADHD<br/> Results</h2>
          </div>
        </div>

        <div id="rowDash">
          <div id="box3">
            <h2>{getM.length}</h2>

            <h2> Total Model<br/> Results</h2>
          </div>

          <div id="box4">
            <h2>{get.length}</h2>

            <h2>Total Number <br/>of Users</h2>
          </div>
        </div>
      </div>

<div id="Line-chart">

<Chart
      chartType="LineChart"
      width="100%"
      height="500px"
      data={data4}
      options={options4}
    />
</div>

    </div>
  );
}

export default Dashboard;
