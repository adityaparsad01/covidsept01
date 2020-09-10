import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = ({ dailyData }) => {
  const modifiedData = dailyData.map((data) => ({
    confirmed: data.confirmed.total,
    deaths: data.deaths.total,
    china: data.deaths.china,
    date: data.reportDate
  }));

  console.log(modifiedData.map(({ china }) => china));

  const lineChart = modifiedData.length ? (
    <Line
      data={{
        labels: modifiedData.map(({ date }) => date),
        datasets: [
          {
            data: modifiedData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: modifiedData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,.5)",
            fill: true
          },
          {
            data: modifiedData.map(({ china }) => china),
            label: "China"
          }
        ]
      }}
    />
  ) : null;

  return (
    <>
      <div className={styles.container}>{lineChart}</div>
    </>
  );
};

export default Chart;
