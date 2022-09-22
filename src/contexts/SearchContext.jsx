/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from 'react';

import KEY from '../KEY';

export const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState(null);

  function handleChangeSearchTerm(data) {
    setSearchTerm(data);
  }

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&download=epub&key=${KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
        })
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ books, handleChangeSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
