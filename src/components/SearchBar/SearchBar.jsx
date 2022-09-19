import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import "./searchBar.scss";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
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
          value={searchTerm}
          name="searchBar"
          onChange={onInputChange}
        />
      </label>
    </form>
  );
}
