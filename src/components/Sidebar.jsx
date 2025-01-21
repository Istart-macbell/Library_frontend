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
        <li onClick={() => toggleSection('section1')}>Administration</li>
        {openSection === 'section1' && (
          <ul>
            <li>Admin Section</li>
            <li>Academics</li>
          </ul>
        )}
        <li onClick={() => toggleSection('section2')}>Student</li>
        {openSection === 'section2' && (
          <ul>
            <li>Student Info</li>
            <li>Timetable</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
