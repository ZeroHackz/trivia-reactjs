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

  
ReactDOM.render(
  <div>
    <BannerClockClass date = { new Date() }/>
{/*     <Prompt message={("true") => 
        params.pathname == '/about' ? "Move away?" : true } /> */}
    <GlobalChatComponent />
    <SettingsComponent />

    
    <MainComponent />
    <MainChatComponent />
    

    {/* <SignalrLearningHub /> */}
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </div>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
