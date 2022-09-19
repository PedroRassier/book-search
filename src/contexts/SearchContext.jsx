import { createContext } from 'react';

import { key } from "../../KEY";

export const SearchContext = createContext({});

export function SearchContextProvider({children}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState(null);

    function handleChangeSearchTerm(data) {
        setSearchTerm(data);
    }

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?${
                searchTerm ? `q=${searchTerm}&` : ''
            }download=epub&key=${key}`
        )
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setBooks(data);
        })
        .catch((err) => console.error(err));
    }, [searchTerm]);

    return (
        <SearchContext.Provider value={books, handleChangeSearchTerm}>
            {children}
        </SearchContext.Provider>
    )
}
