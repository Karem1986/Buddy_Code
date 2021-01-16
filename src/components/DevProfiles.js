import React from "react";


export default function DevProfiles(props) {
  return (
    <div className="Parent">
      <div className="children">
        <img src={props.avatar_url} alt="developers profiles" width="300" height="300" />
        <h4>Alias name: {props.login}</h4>

        <a target="_blank" rel="noopener noreferrer" href={props.html_url}>
          {" "}
          <h5> Github profile</h5>{" "}
        </a>
      </div>
    </div>
  );
}
