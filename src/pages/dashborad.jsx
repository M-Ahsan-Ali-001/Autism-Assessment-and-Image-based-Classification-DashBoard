import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

function Dashboard() {
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
        name: "2016",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 150, label: "Feb" },
          { y: 152, label: "Mar" },
          { y: 148, label: "Apr" },
          { y: 142, label: "May" },
          { y: 150, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 149, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 158, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 150, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2017",
        showInLegend: true,
        dataPoints: [
          { y: 172, label: "Jan" },
          { y: 173, label: "Feb" },
          { y: 175, label: "Mar" },
          { y: 172, label: "Apr" },
          { y: 162, label: "May" },
          { y: 165, label: "Jun" },
          { y: 172, label: "Jul" },
          { y: 168, label: "Aug" },
          { y: 175, label: "Sept" },
          { y: 170, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 169, label: "Dec" },
        ],
      },
    ],
  };
  return (
    <div>
      <p id="head-dash">Dashboard</p>

      <div id="chart">
      <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
      </div>

      <div id="card-holder">
        <div id="rowDash">
          <div id="box1">
            <h2>300</h2>

            <h2>AQ_10</h2>
          </div>

          <div id="box2">
            <h2>500</h2>
            <h2>ADHD</h2>
          </div>
        </div>

        <div id="rowDash">
          <div id="box3">
            <h2>300</h2>

            <h2>Model</h2>
          </div>

          <div id="box4">
            <h2>300</h2>

            <h2>Users</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
