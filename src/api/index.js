import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const res = await axios.get(URL);
    return res;
  } catch (error) {
    console.log(error);
  }
};
