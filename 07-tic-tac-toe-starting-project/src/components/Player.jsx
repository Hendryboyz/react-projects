import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ?
          (<span className="player-name">{name}</span>) :
          (<input type="text" onChange={handleChange} required defaultValue={name} value={name}></input>)
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(wasEditing => !wasEditing)}>
        {!isEditing ? 'Edit' : 'Save'}
      </button>

    </li>
  );
}