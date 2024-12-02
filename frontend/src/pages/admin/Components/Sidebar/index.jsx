import React from "react";
import {  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaBox, FaCartPlus, FaHouseUser, FaSignOutAlt, FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Admin Aurora</h3>
      </div>
      <Nav className="flex-column">
        <Nav.Item className="nav-item-admin">
          <Link to="dashboard" className="nav-link-admin">
         <div><FaHouseUser className="nav-admin-icon" /></div>  Dashboard
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-admin">
          <Link to="products" className="nav-link-admin">
          <div><FaBox  className="nav-admin-icon" /></div>  Products
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-admin">
          <Link to="customers" className="nav-link-admin">
          <div><FaUserFriends className="nav-admin-icon" /></div> Customers
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-admin">
          <Link to="orders" className="nav-link-admin">
          <div><FaCartPlus className="nav-admin-icon" /></div>  Orders
          </Link>
        </Nav.Item>
      </Nav>
      <div className="sidebar-footer">
        <Link to="/logout" className="nav-link-admin">
        <div><FaSignOutAlt  className="nav-admin-icon" /></div>  Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
