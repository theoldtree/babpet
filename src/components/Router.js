import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Company from "routes/Company";
import Product from "routes/Product";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Company />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
