import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = ({ dailyData }) => {
  const modifiedData = dailyData.map((data) => ({
    confirmed: data.confirmed.total,
    deaths: data.deaths.total,
    recovered: data.recovered.total,
    date: data.reportDate
  }));

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
            data: modifiedData.map(({ recovered }) => recovered),
            label: "recovered",
            borderColor: "green",
            backgroundColor: "rgba(255,0,0,.5)",
            fill: true
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
