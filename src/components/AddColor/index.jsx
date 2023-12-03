import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const AddColor = ({ onColorArrayChange }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [validMessage, setValidMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputField = event.target.elements.colorInput;
    const hexColor = inputField.value.trim();

    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
      setErrorMessage(hexColor);
      setValidMessage('');
      inputField.value = '';
      return;
    }

    onColorArrayChange({ name: `My Color ${Math.random()}`, hex: hexColor });
    setErrorMessage('');
    setValidMessage(`Color added: ${hexColor}`);
    inputField.value = '';
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="addColorContainer" name="colorForm">
        <label htmlFor="add-color">Add new Color</label>
        <input
          id="add-color"
          type="text"
          placeholder="e.g. #1a2b3c"
          name="colorInput"
          className="input"
        />
        <button type="submit"> Add color</button>
      </form>
      {errorMessage && <ErrorMessage input={errorMessage} />}
      {validMessage && <div style={{ color: 'green' }}>{validMessage}</div>}
    </>
  );
};

export default AddColor;


  
  
  
  