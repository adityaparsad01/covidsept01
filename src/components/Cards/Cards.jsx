import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  const confirmed = data.confirmed.value;
  const recovered = data.recovered.value;
  const deaths = data.deaths.value;
  const lastUpdate = new Date(data.lastUpdate).toDateString();

  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed}
                  duration={2.5}
                  separator=","
                />
              </Typography>

              <Typography color="textSecondary" gutterBottom>
                {lastUpdate}
              </Typography>
              <Typography variant="body2">
                Number of Active cases Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {lastUpdate}
              </Typography>
              <Typography variant="body2">
                Number of Recovered cases Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {lastUpdate}
              </Typography>
              <Typography variant="body2">
                Number of Deaths cases Covid-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cards;
