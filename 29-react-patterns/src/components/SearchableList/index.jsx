import {useRef, useState} from "react";
import * as _ from 'lodash';

export default function SearchableList({items, itemKeyFn, children}) {
  const [searchTerm, setSearchTerm] = useState('');
  const lastChange = useRef();
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
    if (lastChange.current) {
      lastChange.current?.cancel();
    }
    const debounced = _.debounce(() => {
      setSearchTerm(event.target.value);
      lastChange.current = null;
    }, 500);
    debounced();
    lastChange.current = debounced;
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}