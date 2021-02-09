import React from "react";
import NavBar from "../src/components/NavBar";
import Homepage from "./pages/Homepage/index";
import Buddies from "../src/pages/Buddies/index.js";
import About from "../src/pages/About/index"
import Login from "../src/pages/Login/index"
import Signup from "../src/pages/Signup"
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom"; //gives a website for each web page
import "./App.css";
import BookSession from "./pages/Calendar/index";
// REDUX
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/code_session/:select_buddy"
            exact
            component={Buddies}
          ></Route>
          <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/about" component={About}></Route>
          <Route path="/code_session" component={BookSession}></Route>
          <Route path="/" exact component={Homepage}></Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
