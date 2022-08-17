import logo from './logo.gif';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/Welcome';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greet/>
          
        </p>
        <a
          className="App-link"
          href="Welcome.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          REDPHISH MUSIC
        </a>
      </header>
      <body>
        <Welcome/>
      </body>
      
    </div>
  );
}

export default App;
