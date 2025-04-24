import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

const FilterCodes = () => {
  const [inputText, setInputText] = useState('');
  const [formattedCodes, setFormattedCodes] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleConvert = () => {
    const codesArray = inputText.split(/\s+/).filter(Boolean);
    setFormattedCodes(codesArray.map((code) => `"${code}",`)); // Wrap with quotes and add a comma
    setCopiedIndex(null);
  };

  const handleCopy = (text, index) => {
    if (copy(text)) {
      setCopiedIndex(index);
    }
  };

  const handleCopyAll = () => {
    const allText = formattedCodes.join('\n'); // Join with a new line
    if (copy(allText)) {
      setCopiedIndex('all');
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h3>Enter Codes:</h3>
      <textarea
        rows={10}
        cols={30}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter codes, one per line or separated by spaces"
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />

      <button
        onClick={handleConvert}
        style={{ margin: '0.5rem 0', padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Convert
      </button>

      {formattedCodes.length > 0 && (
        <>
          <h3>Filtered Codes:</h3>
          <button
            onClick={handleCopyAll}
            style={{ marginBottom: '0.5rem', padding: '0.25rem 0.5rem' }}
          >
            Copy All
          </button>

          <div
            style={{
              lineHeight: '1.5',
              border: '1px solid #ccc',
              padding: '0.5rem',
              borderRadius: '4px',
            }}
          >
            {formattedCodes.map((code, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: 'monospace' }}>{code}</span>
                <button
                  onClick={() => handleCopy(code, index)}
                  style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem' }}
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
            {copiedIndex === 'all' && (
              <div style={{ marginTop: '0.5rem', color: 'green' }}>
                All codes copied!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const App = () => (
  <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
    <FilterCodes />
  </div>
);

export default App;
