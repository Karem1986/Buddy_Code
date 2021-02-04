import React, { useEffect, useState } from "react";
import DevProfiles from "../../components/DevProfiles";
import axios from "axios";

export default function Buddies() {
  const [githubUsers, setGithubUsers] = useState([]);

  //Display the profiles from Github until backend is created:

  useEffect(() => {
    async function getProfiles() {
      try {
        const API_URL = `https://randomuser.me/api/?results=100`;

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
    <div>
      <h1>Select your coding buddy: </h1>

      <span>
        {githubUsers.map((data, index) => {
          return (
            <DevProfiles
              key={index}
              name={data.name.first}
              picture={data.picture.medium}
              location={data.location.country}
            />
          );
        })}
      </span>
    </div>
  );
}
