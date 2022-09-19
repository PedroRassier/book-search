import { useContext } from "react";
import BookView from "../BookView/BookView";
import { SearchContext } from "../../contexts/SearchContext";

export default function Main() {
  const { books } = useContext(SearchContext);

  return (
    <div>
      {books?.items.map((book) => {
        return (
          <BookView
            key={book.id}
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
