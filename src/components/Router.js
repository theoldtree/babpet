import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

import Signup from "routes/Signup";
import Company from "routes/Company";
import Product from "routes/Product";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/*" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/product" element={<Product />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<Auth />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
