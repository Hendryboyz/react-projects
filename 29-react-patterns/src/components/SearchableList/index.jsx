import {useState} from "react";

export default function SearchableList({items, children}) {
  const [searchTerm, setSearchTerm] = useState('');
  let searchResults = items;
  if (searchTerm && searchTerm.trim() !== '') {
    searchResults = items.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}