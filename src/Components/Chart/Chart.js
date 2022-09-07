import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../Api/Api";

const Charts = () => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchApi = await fetchDailyData();
      setdailyData(fetchApi);
    };
    fetchData();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",

            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",

            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className="chart"> {lineChart}</div>;
};

export default Charts;
