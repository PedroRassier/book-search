import { useEffect, useState, useContext } from "react";
import BookView from "../BookView/BookView";
import { SearchContext } from '../contexts/SearchContext';

import { key } from "../../KEY";

export default function Main() {
  const { books } = useContext(SearchContext);

  return (
    <div>
      {books.items.map((book, index) => {
        return (
          <BookView
            key={index}
            title={book.volumeInfo.title}
            autor={book.volumeInfo.authors}
            imgSrc={book.volumeInfo.imageLinks.smallThumbnail}
            description={book.volumeInfo.description}
          />
        );
      })}
    </div>
  );
}
