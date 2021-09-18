import React from "react";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homebody from "./Homebody";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={() => <Homebody name="Home" />} />
          <Route
            exact
            key="contact"
            path="/contact"
            component={() => <Contact name="Contact " />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
