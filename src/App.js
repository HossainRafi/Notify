import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import FrndDetails from "./components/FrndDetails";
import FrndBirthday from "./components/FrndBirthday";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <h3>sdhfhdfsdhfsdhfskdjfskdjf</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frnddetails" element={<FrndDetails />} />
        <Route path="/frndbirthday" element={<FrndBirthday />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
