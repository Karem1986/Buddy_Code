import React from "react";
import NavBar from "../src/components/NavBar";
import Homepage from "./pages/Homepage/index";
import Buddies from "../src/pages/Buddies/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom"; //gives a website for each web page
import "./App.css";
import BookSession from "./pages/Calendar/index";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/code_session/:select_buddy"
            exact
            component={Buddies}
          ></Route>
          <Route path="/code_session" component={BookSession}></Route>
          <Route path="/" exact component={Homepage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
