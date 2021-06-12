import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, LobbyOverview, AccountCreate, LobbyHost, Login, SinglePlayer } from "./index.js";
import GlobalChatRight from './Components/GlobalChatRight';
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
          <Router>
          <Navigation />
        <div class="container-md">
          <div class="row">
            <div class="col">
              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/single-player" exact component={() => <SinglePlayer />} />
                <Route path="/lobby-host" exact component={() => <LobbyHost />} />
                <Route path="/lobbies" exact component={() => <LobbyOverview />} />
                <Route path="/login" exact component={() => <Login />} />
                <Route path="/acccount-create" exact component={() => <AccountCreate />} />
              </Switch>
            </div>
            <div class="col">
              <GlobalChatRight />
            </div>
          </div>
      </div>
          </Router>
      
      <Footer />
    </div>
  );
}

export default App;
