import React from "react";
import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homebody from "./Homebody";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Homebody name="Home" />} />
        <Route
          exact
          path="/contact"
          component={() => <Contact name="Contact " />}
        />
      </Switch>
    </>
  );
}

export default App;
