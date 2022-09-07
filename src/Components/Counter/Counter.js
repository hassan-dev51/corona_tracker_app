import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@mui/material";

import { fetchCountries } from "../Api/Api";

const Counter = () => {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState("Global");

  useEffect(() => {
    const fetchData = async () => {
      const fetchCountriesData = await fetchCountries();
      setCountries(fetchCountriesData);
    };

    fetchData();
  }, [setCountries]);

  return (
    <div className="select_form">
      <FormControl>
        <NativeSelect
          variant="standard"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="global">Global</option>
          {countries.map((country, ind) => (
            <option key={ind} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Counter;
