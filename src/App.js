import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrndDetails from "./components/FrndDetails";
import FrndBirthday from "./components/FrndBirthday";
import Error from "./components/Error";

const App = () => {
  return (
    <Router>
      {/* <Switch> */}
        <Route path="/" component={Home} exact />
        <Route path="/frnddetails" component={FrndDetails} exact />
        <Route path="/frndbirthday" component={FrndBirthday} exact />
        <Route component={Error} />
      {/* </Switch> */}
    </Router>
  );
};

export default App;
