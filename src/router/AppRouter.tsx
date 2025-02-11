import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "../components/auth/login/login.component";
import AuthLayout from "../components/layout/auth-layout";
import RegisterComponent from "@/components/auth/register/register.component";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={<AuthLayout Component={<LoginComponent />} />}
        />
        <Route
          path="/Login"
          element={<AuthLayout Component={<LoginComponent />} />}
        />
        <Route
          path="/Register"
          element={<AuthLayout Component={<RegisterComponent />} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
