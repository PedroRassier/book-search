import SearchBar from "../SearchBar/SearchBar";
import "./header.scss";

export default function Header() {
  return (
    <div className="Header">
      <h1>
        Book<span>Search</span>
      </h1>
      <SearchBar />
    </div>
  );
}
