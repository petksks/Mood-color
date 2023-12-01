const AddColor = ({ onColorArrayChange }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const inputField = event.target.elements.colorInput;
        const hexColor = inputField.value.trim();
        const errorMessage = document.getElementById('error-message');
        const validMessage = document.getElementById('valid-message');

        if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
            showMessage(errorMessage, `Invalid color: ${hexColor}`, true);
            showMessage(validMessage, `Color added: ${hexColor}`, false);
            inputField.value = '';
            return;
        }

        onColorArrayChange({ name: `My Color ${Math.random()}`, hex: hexColor },);
        showMessage(errorMessage, `Invalid color: ${hexColor}`, false);
        showMessage(validMessage, `Color added: ${hexColor}`, true);
        inputField.value = '';
        return;
    };

    const showMessage = (div, message, shouldShow = true) => {
        div.textContent = message;
        div.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow && div.id === "error-message") {
            div.setAttribute('data-testid', 'error-message');
        } else {
            div.removeAttribute('data-testid');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="addColorContainer" name="colorForm">
                <label htmlFor="add-color">Add new Color</label>
                <input
                    id='add-color'
                    type="text"
                    placeholder="e.g. #1a2b3c"
                    name="colorInput"
                    className="input"
                />
                <button type="submit"> Add color</button>
            </form>
            <div id="error-message" style={{ display: 'none', color: 'red' }}></div>
            <div id="valid-message" style={{ display: 'none', color: 'green' }}></div>
        </>
    );
};

export default AddColor;

  
  
  
  