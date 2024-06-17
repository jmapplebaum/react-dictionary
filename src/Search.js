import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);

    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=5b4802f40a5b2aoe7a3t7b824a662fdf`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input type="search" onChange={keywordChange} />
      </form>
    </div>
  );
}
