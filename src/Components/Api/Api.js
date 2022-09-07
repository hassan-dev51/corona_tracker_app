import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);

    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);
    const modifyData = data.map((currElem) => ({
      confirmed: currElem.confirmed.total,
      deaths: currElem.deaths.total,
      reportDate: currElem.reportDate,
    }));
    return modifyData;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
