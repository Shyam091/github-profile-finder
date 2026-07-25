import React from 'react';

function InputForm({ userName, setUserName, handleSubmit }) {
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter git profile name..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default InputForm;