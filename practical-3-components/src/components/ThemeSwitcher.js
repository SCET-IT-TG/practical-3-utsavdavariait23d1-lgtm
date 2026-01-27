import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to the entire page using inline styles
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#000';
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
  }, [isDarkMode]);

  // Optional: styling for the component itself
  const componentStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '50px',
    backgroundColor: isDarkMode ? '#444' : '#f0f0f0', // slightly different from body
    display: 'inline-block',
  };

  return (
    <div style={componentStyle}>
      <h2>Theme Switcher Component</h2>
      <p>This will change the theme of the entire page.</p>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;