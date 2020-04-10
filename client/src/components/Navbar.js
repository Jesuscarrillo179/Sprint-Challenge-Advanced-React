import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('false');
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="nav">
      <h1 className="header">Players List</h1>
      <div className="dmbutton">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
