import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeContextProvider } from "./context/themeContext.jsx";
//import Parent from "./latihan/Parent.jsx";
//import { CounterContextProvider } from "./context/counterContext.jsx";
//import Exercise from './Exercise1.jsx'
//import Exercise from './Exercise.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
