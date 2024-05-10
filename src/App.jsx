import React, { useState } from 'react';

function useStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const handleChange = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, handleChange];
}

function App() {
  const [inputValue, setInputValue] = useStorage('textValue', '');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="input">Type something:</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Text is: {inputValue}</p>
    </div>
  );
}

export default App;

