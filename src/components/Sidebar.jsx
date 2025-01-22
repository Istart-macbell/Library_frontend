import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="dropdown-header" onClick={() => toggleSection('administration')}>
            Administration <span className="dropdown-icon">{openSection === 'administration' ? '▲' : '▼'}</span>
          </div>
          {openSection === 'administration' && (
            <ul className="dropdown-content">
              <li>All Staff</li>
              <li>Add Staff</li>
            </ul>
          )}
        </li>

        <li>
          <div className="dropdown-header" onClick={() => toggleSection('student')}>
            Student <span className="dropdown-icon">{openSection === 'student' ? '▲' : '▼'}</span>
          </div>
          {openSection === 'student' && (
            <ul className="dropdown-content">
              <li>All Students</li>
              <li>Add Student</li>
              <li>Fee</li>
            </ul>
          )}
        </li>
        <li>
          <div className="dropdown-header" onClick={() => toggleSection('book')}>
            Books <span className="dropdown-icon">{openSection === 'book' ? '▲' : '▼'}</span>
          </div>
          {openSection === 'book' && (
            <ul className="dropdown-content">
              <li>All Books</li>
              <li>Add Book</li>
            </ul>
          )}
        </li>
        <li className="settings">
          <div>Settings</div>
        </li>
        <li className="logout">
          <div>Logout</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
