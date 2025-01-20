// // ThemeContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedTheme);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
