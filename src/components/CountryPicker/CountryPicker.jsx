import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ countries, handlechange }) => {
  const country = countries.map((data) => data.name);

  return (
    <>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={handlechange}>
          <option value="global">Global</option>
          {country.map((data, i) => (
            <option key={i} value={data}>
              {data}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
