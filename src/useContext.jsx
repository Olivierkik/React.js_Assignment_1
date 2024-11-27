// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

// 1. Create a Context
const ThemeContext = createContext();


// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consuming the context value

  return (
    <div className='w-50' style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
        <h1>Usecontext</h1>
     <h6>Current Theme: {theme}</h6>
      <button className='btn btn-primary btn-hover' onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// 4. Export UseContext component
export default UseContext;