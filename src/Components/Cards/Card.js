import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import { fetchData } from "../Api/Api";
import Counter from "../Counter/Counter";
const Card = () => {
  const [MainData, setMainData] = useState({});
  const [countryName, setCountryName] = useState("");
  const getData = async () => {
    const resultData = await fetchData();
    setMainData(resultData);
  };

  const handelChange = async (country) => {
    const resultData = await fetchData(country);
    setMainData(resultData);
    setCountryName(country);
  };
  useEffect(() => {
    getData();
    handelChange();
  }, []);

  const { confirmed, deaths, recovered, lastUpdate } = MainData;
  if (!confirmed) {
    return "loading...";
  }
  return (
    <>
      <div className="main_div">
        <div className="card" style={{ borderBottom: "5px solid red" }}>
          <span>Deaths</span>
          <h2>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <p>No of cases of covid</p>
        </div>
        <div className="card" style={{ borderBottom: "5px solid purple" }}>
          <span>infected</span>
          <h2>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <p>No of cases of covid</p>
        </div>
        <div className="card" style={{ borderBottom: "5px solid green" }}>
          <span>Recoverd</span>
          <h2>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <p>No of cases of covid</p>
        </div>
      </div>
      <Counter
        handelChange={handelChange}
        MainData={MainData}
        country={countryName}
      />
    </>
  );
};

export default Card;
