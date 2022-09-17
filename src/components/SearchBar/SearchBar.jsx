import { MagnifyingGlass } from "phosphor-react";
import { useState, createContext } from "react";
import "./searchBar.scss";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
  };
  const context = () => {
    createContext(searchTerm);
  };
  return (
    <SearchContext.Provider value={searchTerm}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="searchBar">
          <button type="submit">
            <MagnifyingGlass size={32} />
          </button>
          <input
            type="text"
            id="searchBar"
            value={searchTerm}
            name="searchBar"
            onChange={onInputChange}
          />
        </label>
      </form>
    </SearchContext.Provider>
  );
}
