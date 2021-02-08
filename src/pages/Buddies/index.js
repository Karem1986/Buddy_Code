import React, { useEffect, useState } from "react";
import DevProfiles from "../../components/DevProfiles";
import { Box, Grid, Paper, Snackbar, Button, Slide } from "@material-ui/core";
import axios from "axios";
import { useStyles } from "./styles"


export default function Buddies() {
  const classes = useStyles()
  const [githubUsers, setGithubUsers] = useState([]);

//Display the profiles from a random user API until backend is created:

  useEffect(() => {
    async function getProfiles() {
      try {
        const API_URL = `https://randomuser.me/api/?results=28`;

        const profiles = await axios.get(`${API_URL}`);

        console.log("testing api", profiles);
        setGithubUsers(profiles.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfiles();
  }, []);

  return (
    <Box mt={4} className={classes.root}>
       <Grid container spacing={2}>
         <Paper elevation={3}/>
        {githubUsers.map((data, index) => {
          return (
            <Grid item xs={12} sm={3}>
            <DevProfiles
              key={index}
              name={data.name.first}
              picture={data.picture.large}
              location={data.location.country}
            />
              </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
