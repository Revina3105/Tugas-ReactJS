import React from "react";

const SearchBar = (props) => {
  return (
    <div className="ui search">
      <div className="ui fluid icon input">
        <input
          className="prompt"
          type="text"
          onChange={props.inputHandler}
          placeholder="Search..."
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
