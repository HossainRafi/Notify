import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FrndDetails from "./components/FrndDetails";
import FrndBirthday from "./components/FrndBirthday";
import Error from "./components/Error";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frnddetails" element={<FrndDetails />} />
        <Route path="/frndbirthday" element={<FrndBirthday />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default App;
