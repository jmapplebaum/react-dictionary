import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSearch} className="text-center">
            <input
              type="search"
              placeholder="🔍 search for a word"
              onChange={keywordChange}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
