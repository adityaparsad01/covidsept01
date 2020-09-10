import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

const URL = "https://covid19.mathdro.id/api";

export default function App() {
  const [covid, setCovid] = useState();
  const [ddata, setDdata] = useState([]);
  const [country, setCountry] = useState([]);
  const [countrypick, setCountryPick] = useState("");

  const data = async (countrypick) => {
    let changeable = URL;

    if (countrypick) {
      changeable = `${URL}/countries/${countrypick}`;
    }
    await axios
      .get(changeable)
      .then((res) => {
        setCovid(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const daily = async () => {
    await axios
      .get(`${URL}/daily`)
      .then((res) => {
        setDdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const countries = async () => {
    await axios
      .get(`${URL}/countries`)
      .then((res) => {
        setCountry(res.data.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlechange = (e) => {
    setCountryPick(e.target.value);
  };

  useEffect(() => {
    data();
    daily();
    countries();
  }, [countrypick]);

  return (
    <div className={styles.container}>
      <Cards data={covid} />
      <CountryPicker countries={country} handlechange={handlechange} />
      <Chart dailyData={ddata} />
    </div>
  );
}
