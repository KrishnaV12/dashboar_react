import React from 'react'

const Search = (props) => {
    const {term , handleChange} =props
  return (
    <div>
      <input
        className='form-control me-2'
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search"
      ></input>
    </div>
  );
}

export default Search