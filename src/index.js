import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { GamesContextProvider } from './context/GamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GamesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GamesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
