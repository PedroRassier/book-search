import { MagnifyingGlass } from 'phosphor-react';
import { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

import './searchBar.scss';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const { handleChangeSearchTerm } = useContext(SearchContext);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleChangeSearchTerm(searchInput);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="searchBar">
        <button type="submit">
          <MagnifyingGlass size={32} />
        </button>
        <input
          type="text"
          id="searchBar"
          value={searchInput}
          name="searchBar"
          onChange={onInputChange}
        />
      </label>
    </form>
  );
}
