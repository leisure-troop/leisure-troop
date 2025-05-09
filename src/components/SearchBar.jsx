import { useState } from 'react';

// The SearchBar component takes a prop called `onSearch` from its parent
function SearchBar({ onSearch }) {
    // This state stores what the user types in the input field
    const [query, setQuery] = useState('');

    // This function is triggered every time the user types something
    const handleChange = (e) => {
        const newQuery = e.target.value; // reads what the user just typed
        setQuery(newQuery); // update to the local state
        onSearch(newQuery); // tell the parent what is  the new search word
        console.log("Typed:", newQuery);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by Keyword..." // writing inside the box
                value={query}                     // link the input to the state
                onChange={handleChange}          // every keypress triggers handleChange
            />
        </div>
    );
}

export default SearchBar;
