import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const ApiData = async () => {
  try {
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
