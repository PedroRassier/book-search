import { useContext } from "react";
import BookView from "../BookView/BookView";
import { SearchContext } from "../../contexts/SearchContext";

export default function Main() {
  const { books } = useContext(SearchContext);

  function checkAuthors(book) {
    if (book.volumeInfo.authors.lenght > 0) {
      console.log(book.volumeInfo.authors);
      return (
        book.volumeInfo.authors.lenght[0] +
        "and" +
        book.volumeInfo.authors.lenght[1]
      );
    } else {
      book.volumeInfo.authors;
    }
  }

  return (
    <div>
      {books?.items.map((book) => {
        return (
          <BookView
            key={book.id}
            bookLink={book.volumeInfo.previewLink}
            title={book.volumeInfo.title}
            autor={book.volumeInfo.authors}
            imgSrc={book.volumeInfo.imageLinks.smallThumbnail}
            description={
              book.volumeInfo.description != null || ""
                ? book.volumeInfo.description
                : "No description avaliable"
            }
          />
        );
      })}
    </div>
  );
}
