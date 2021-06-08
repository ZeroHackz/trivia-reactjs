import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, LobbyOverview, GlobalChat } from "./index.js";
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
      {/* { appHeader }
      { appBody }
      { appFooter } */}
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/lobbies" exact component={() => <LobbyOverview />} />
          <Route path="/chat" exact component={() => <GlobalChat />} />
        </Switch>
        <GlobalChatRight />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
