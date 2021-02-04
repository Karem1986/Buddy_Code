import React from "react";


export default function DevProfiles(props) {
  return (
    <div className="Parent">
      <div className="children">
        <img src={props.picture} alt="developers profiles" width="300" height="300" />
        <h4>name: {props.name}</h4>
        <h3>Location: {props.location}</h3>
      </div>
    </div>
  );
}
