import { useState, useEffect, useRef } from "react";

export default function SearchBar({ onSearch, suggestions, onSelect, isSearching }) {
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null);
  const skipNextSearchRef = useRef(false);

  useEffect(() => {
    if (skipNextSearchRef.current) {
      skipNextSearchRef.current = false;
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(query);
    }, 400);

    return () => clearTimeout(debounceRef.current);
  }, [query, onSearch]);

  const handleSelect = (place) => {
    skipNextSearchRef.current = true;
    setQuery(`${place.name}, ${place.country}`);
    onSelect(place);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Поиск города..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {isSearching && <p className="search-bar__status">Поиск...</p>}

      {suggestions.length > 0 && (
        <ul className="search-bar__suggestions">
          {suggestions.map((place) => (
            <li key={place.id}>
              <button type="button" onClick={() => handleSelect(place)}>
                {place.name}
                {place.admin1 ? `, ${place.admin1}` : ""}, {place.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}