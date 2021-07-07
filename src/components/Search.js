import { useHistory } from 'react-router-dom';
import ".././App.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <center>
        <form className="search-form"
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search Recipes
                </span>
            </label>
            <input
                value={searchQuery.toLowerCase()}
                onInput={(e) => setSearchQuery(e.target.value.toLowerCase())}
                type="text"
                id="header-search"
                placeholder="Search Recipes..."
                name="s"
            />
            <button className="search-btn" type="submit">Search</button>
        </form></center>
    );
};

export default SearchBar;