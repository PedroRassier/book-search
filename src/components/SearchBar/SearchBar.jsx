import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { SearchContext } from '../../contexts/SearchContext'

import "./searchBar.scss";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const { handleChangeSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    handleChangeSearchTerm(searchInput);
  }, [searchInput])

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
