import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  // add input validation so the user cannot input words/letters/symbols
  // we have the input work automatically
  // we use the search button onClick event.

  // Use State
  const [searchInput, setSearchInput] = useState("");

  //
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="Searchbar">
      <input
        type="text"
        placeholder="Enter Post ID"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
