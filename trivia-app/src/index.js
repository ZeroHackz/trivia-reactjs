import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function tick() {
  const elementLive = (
    
    <div>
    <div className="banner-top">
      <i>It is {new Date().toLocaleTimeString()}.</i>
    </div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  );
  ReactDOM.render(elementLive, document.getElementById('root'));
}

setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
