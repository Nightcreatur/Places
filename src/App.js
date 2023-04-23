import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";
import Error from "./user/pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/newPlaces" element={<Places />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
