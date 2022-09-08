import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@mui/material";

import { fetchCountries } from "../Api/Api";
import Charts from "../Chart/Chart";

const Counter = ({ handelChange, MainData, country }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchCountriesData = await fetchCountries();
      setCountries(fetchCountriesData);
    };

    fetchData();
  }, [setCountries]);

  return (
    <>
      <div className="select_form">
        <FormControl>
          <NativeSelect
            variant="standard"
            defaultValue=""
            onChange={(e) => handelChange(e.target.value)}
          >
            <option value="">Global</option>
            {countries.map((country, ind) => (
              <option key={ind} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>

      <Charts MainData={MainData} country={country} />
    </>
  );
};

export default Counter;
