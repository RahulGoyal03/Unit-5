import React from "react";
import { Nav, link } from "../styles/Style";
import {Link} from "react-router-dom"

const Navbar = () => {
  return <Nav>
      <Link style={link} to="/">Home</Link>
      <Link style={link} to="/login">Login</Link>
      <Link style={link} to="/dashboard">Dashboard</Link>
      <Link style={link} to="/dashboard/setting">Settings</Link>
  </Nav>;
};

export default Navbar;
