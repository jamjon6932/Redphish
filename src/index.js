import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Greet from './Components/greet';
import WeeklySale from './Components/WeeklySale';
import Welcome from './Components/Welcome';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import App from './App';

//import reportWebVitals from './reportWebVitals';

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="contact" element={<Contact />} />
          <Route path="weeklysale" element={<WeeklySale />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
