import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header">
          <h1>English Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>
          <hr />
          This project was coded by{" "}
          <a href="https://jennahcodes.com/" target="_blank" rel="noreferrer">
            {" "}
            Jennah Applebaum
          </a>
          , and is open-sourced on{" "}
          <a
            href="https://github.com/jmapplebaum/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
