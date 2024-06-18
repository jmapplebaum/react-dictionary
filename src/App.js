import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>English Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer className="text-center">
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
