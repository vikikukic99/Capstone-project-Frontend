import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ReadMorePage from "./components/ReadMorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/read-more" element={<ReadMorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
