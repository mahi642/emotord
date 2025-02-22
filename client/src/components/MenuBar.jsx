import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUser,
  FaCog,
  FaBars,
} from "react-icons/fa";
import "./Menubar.css"; // Import styles

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`menu-bar ${isOpen ? "open" : "closed"}`}>
      {/* Sidebar Header */}
      <div className="menu-header">
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
        <h2 className="menu-title">{isOpen ? "Menu" : ""}</h2>
      </div>

      {/* Menu Items */}
      <ul className="menu-list" style ={{
        alignContent:"start"
      }}>
        <li>
          <FaTachometerAlt />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li>
          <FaExchangeAlt />
          {isOpen && <span>Transactions</span>}
        </li>
        <li>
          <FaCalendarAlt />
          {isOpen && <span>Schedules</span>}
        </li>
        <li>
          <FaUser />
          {isOpen && <span>Users</span>}
        </li>
        <li>
          <FaCog />
          {isOpen && <span>Settings</span>}
        </li>
      </ul>

      {/* Footer */}
      <div className="menu-footer">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Menubar;
