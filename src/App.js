import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
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
      </header>
    </div>*/
    <body>
      <section id="navigationbar">
          <nav class="navbar navbar-expand-lg navbar-dark navMargin">
              <a class="navbar-brand" href="index.html">
                  <img src="images/NP_Logo.png" width="84" height="60" class="d-inline-block align-top" alt="Logo"></img>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="PhamNicholasResume.pdf">Resume</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </section>
    </body>
  );
}

export default App;
