import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();

    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=5b4802f40a5b2aoe7a3t7b824a662fdf`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch} className="text-center">
        <input type="search" onChange={keywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
