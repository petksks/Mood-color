import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const AddColor = ({ onColorArrayChange }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputField = event.target.elements.colorInput;
    const hexColor = inputField.value.trim();

    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
      setErrorMessage(hexColor);
      inputField.value = '';
      return;
    }

    onColorArrayChange({ name: `My Color ${Math.random()}`, hex: hexColor });
    setErrorMessage('');
    inputField.value = '';
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-color-container" name="colorForm">
        <label htmlFor="add-color"></label>
        <div>
            <input
            id="add-color"
            type="text"
            placeholder="add color e.g. #00ffd0"
            name="colorInput"
            className="input"
            />
            <button type="submit"> Add color</button>
        </div>
      {errorMessage && <ErrorMessage input={errorMessage} />}
      </form>
    </>
  );
};

export default AddColor;


  
  
  
  