import React, { ReactNode } from "react";
import "./../../styles/auth.styles.scss";

interface AuthLayoutProps {
  Component: ReactNode;
}

const AuthLayout = ({ Component }: AuthLayoutProps) => {
  return <div className="auth-container">{Component}</div>;
};

export default AuthLayout;
