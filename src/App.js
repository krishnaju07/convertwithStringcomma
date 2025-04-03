import React, { useState } from 'react';

const FilterCodes = () => {
  const [inputText, setInputText] = useState('');
  const [formattedCodes, setFormattedCodes] = useState([]);

  const handleConvert = () => {
    const codesArray = inputText.split(/\s+/).filter(Boolean);
    setFormattedCodes(codesArray.map((code) => `"${code}",`));
  };

  return (
    <div>
      <h3>Enter Codes:</h3>
      <textarea
        rows="10"
        cols="30"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter codes, one per line"
      />
      <br />
      <button onClick={handleConvert}>Convert</button>
      <h3>Filtered Codes:</h3>
      <div style={{ lineHeight: '1.2' }}>
        {formattedCodes.map((code, index) => (
          <div key={index}>{code}</div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FilterCodes />
    </div>
  );
};

export default App;
