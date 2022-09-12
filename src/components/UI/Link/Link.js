import React from "react";
import { Link as Linked } from "react-router-dom";
const Link = ({ children, to, color }) => {
  return (
    <Linked to={to} style={{ textDecoration: "none", color: color }}>
      {children}
    </Linked>
  );
};

export default Link;
