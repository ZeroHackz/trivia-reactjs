import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home,  LobbyHost,  SinglePlayer , UploadSnippetDiscordAutoSubmit } from "./index.js";
import GlobalChatRight from './Components/GlobalChatRight';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
const appHeader = (
  
  <div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />  
  Header
</div>
);
const appBody = (<div className="App-body">Body</div>);
const appFooter = (<div className="App-footer">Footer</div>);

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
          <Router>
          <Navigation />
          <div className="row">
            <div className="col-9">
              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/single-player" exact component={() => <SinglePlayer />} />
                <Route path="/upload-snippet-discord" exact component={() => <UploadSnippetDiscordAutoSubmit />} />
              </Switch>
            </div>
            <div className="col-3">
              <GlobalChatRight />
            </div>
          </div>
          </Router>
      <Footer />
      </div>
    </div>
  );
}

export default App;
