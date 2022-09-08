import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../Api/Api";

const Charts = ({ MainData: { confirmed, deaths, recovered }, country }) => {
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

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Deaths", "Infected", "Recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["red", "purple", "green"],
            data: [deaths.value, confirmed.value, recovered.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current Country ${country}` },
      }}
    />
  ) : null;
  return <div className="chart">{country ? barChart : lineChart} </div>;
};

export default Charts;
