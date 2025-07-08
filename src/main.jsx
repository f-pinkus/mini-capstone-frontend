import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://mini-capstone-api-uoh0.onrender.com";

const API_BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://mini-capstone-api-uoh0.onrender.com";

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);