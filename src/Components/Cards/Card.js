import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import { ApiData } from "../Api/Api";
const Card = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    ApiData().then((data) => setCountries(data.confirmed));
    console.log("====================================");
    console.log(countries);
    console.log("====================================");
  }, []);
  return (
    <>
      <div className="main_div">
        <div className="card" style={{ borderBottom: "5px solid red" }}>
          <span>Deaths</span>
          <h2>2563</h2>
          <span>wed april 2022</span>
          <p>No of cases of covid</p>
        </div>
        <div className="card" style={{ borderBottom: "5px solid purple" }}>
          <span>Infected</span>
          <h2>2563</h2>
          <span>wed april 2022</span>
          <p>No of cases of covid</p>
        </div>
        <div className="card" style={{ borderBottom: "5px solid green" }}>
          <span>Recoverd</span>
          <h2>2563</h2>
          <span>wed april 2022</span>
          <p>No of cases of covid</p>
        </div>
      </div>
      <div className="select">
        <FormControl>
          <Select variant="outlined">
            <MenuItem value="World Wide">World Wide</MenuItem>

            <MenuItem value="1">one</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Card;
