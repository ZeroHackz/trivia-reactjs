import logo from './logo.svg';
import './App.css';
const appHeader = (
  
  <div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</div>
);
const appBody = (<div className="App-body">Body</div>);
const appFooter = (<div className="App-footer">Footer</div>);

function App() {
  return (
    <div className="App">
      { appHeader }
      { appBody }
      { appFooter }
    </div>
  );
}

export default App;
