import React from 'react';

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          onClick={onSearch} 
          className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
