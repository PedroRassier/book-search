import { MagnifyingGlass } from "phosphor-react";
import "./searchBar.scss";

export default function SearchBar() {
  return (
    <>
      <label htmlFor="searchBar">
        <MagnifyingGlass size={32} />
        <input type="text" id="searchBar" name="searchBar" />
      </label>
    </>
  );
}
