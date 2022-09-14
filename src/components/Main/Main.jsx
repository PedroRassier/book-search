import { booksList } from "../../Data";
import BookView from "../BookView/BookView";
export default function Main() {
  return (
    <div>
      {booksList.map(({ id, titulo, autor, anoLancamento }) => {
        return (
          <BookView
            key={id}
            title={titulo}
            autor={autor}
            anoLancamento={anoLancamento}
          />
        );
      })}
    </div>
  );
}
