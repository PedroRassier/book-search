import { useContext, useState } from "react";
import BookView from "../BookView/BookView";

export default function Main() {
  const [books, setBooks] = useState({ items: [] });
  const fetchBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${"areia"}&download=epub&key=${"AIzaSyAGPOz7bGwxISlKQRAZGYPcid-pMQJHvWI"}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((err) => console.error(err));
  };
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
