import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import BannerClock from './Components/BannerClockComponent.js';
import BannerClockClass from './Components/BannerClockComponentClass.js';
import reportWebVitals from './reportWebVitals';

  
ReactDOM.render(
  <div>
    <BannerClockClass date = { new Date() }/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
