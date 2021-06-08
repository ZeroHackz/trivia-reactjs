import React from 'react';
import ReactDOM from 'react-dom';
import Prompt from 'react-dom';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './index.css';
import App from './App.js';
import BannerClockClass from './Components/BannerClockComponentClass.js';
import SettingsComponent from './Components/SettingsComponent.js';
import GlobalChatComponent from './Components/SignalrGlobalChat.js';
import MainComponent from './Components/MainComponent.js';
import MainChatComponent from './Components/SignalrRoomChat';
import reportWebVitals from './reportWebVitals';
//Pages simplified importing for all components.
export { default as Navigation } from "./Pages/Navigation";
export { default as Footer } from "./Pages/Footer";
export { default as Home } from "./Pages/Home";
export { default as About } from "./Pages/About";
export { default as Contact } from "./Pages/Contact";
  
ReactDOM.render(
  <div>
    <App />
    <BannerClockClass date = { new Date() }/>
    <GlobalChatComponent />
    <SettingsComponent />
    <MainComponent />
    <MainChatComponent />
  </div>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
