import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './index.css';
import App from './App.js';
import GlobalChatRight from './Components/GlobalChatRight';
import MainChatComponent from './Components/SignalrRoomChat';
import reportWebVitals from './reportWebVitals';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
//Pages simplified importing for all components.
export { default as Navigation } from "./Pages/Navigation";
export { default as Footer } from "./Pages/Footer";
export { default as Home } from "./Pages/Home";
export { default as Contact } from "./Pages/Contact";
export { default as UploadSnippetDiscordAutoSubmit } from "./Pages/UploadSnippetDiscordAutoSubmit";
export { default as SinglePlayer } from "./Pages/SinglePlayer";
  
ReactDOM.render(
  <div>
    <App />
  </div>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();