import React from "react";
import "../App.css";

const Search = ({ reload, limit, search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
    reload(1, limit, event.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      value={search}
      onChange={handleChange}
    />
  );
};

export default Search;
