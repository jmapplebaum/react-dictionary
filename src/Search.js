import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
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
