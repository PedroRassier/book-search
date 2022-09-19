import { createContext } from 'react';

export const SearchContext = createContext({});

export function SearchContextProvider() {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({ items: [] });

    function handleChangeSearchTerm(data) {
        setSearchTerm(data);
    }

    useEffect(() => {
        fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&download=epub&key=${key}`
        )
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setBooks(data);
        })
        .catch((err) => console.error(err));
    }, [searchTerm]);

    return (
        <SearchContext.Provider value={books, handleChangeSearchTerm} />
    )
}
