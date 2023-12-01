import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Color } from './constants/colors'
import AddColor from './components/AddColor';

function App() {

  const [colors, setColors] = useState(Color);
  const [idCounter, setIdCounter] = useState(1); 
  
  const handleColorArrayChange = (newColor) => {
    setColors((prevColors) => {
      const updatedColors = [
        ...prevColors,
        { id: 'My Color ' + idCounter, color: newColor.hex, titel: 'My Color ' + idCounter}
      ];
        return updatedColors;
    }); 
    setIdCounter((prevIdCounter) => prevIdCounter + 1);
  };

  return (
    <div className="App">
      <Header className="App-header" title='Mood Color' data-testid='header-component'/>
      <ListItems colorArray={colors} data-testid='color-container' />
      <AddColor onColorArrayChange={handleColorArrayChange}/>
      <Footer data-testid='footer-component'/>
    </div>
  );
}

export default App;


