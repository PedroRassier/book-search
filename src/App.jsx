import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { SearchContextProvider } from "./contexts/SearchContext";

export default function App() {
  return (
    <SearchContextProvider>
      <Header />
      <Main />
    </SearchContextProvider>
  );
}
