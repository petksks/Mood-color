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

  const handleDeleteColor = (id) => {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  };

  return (
    <div className='app'>
      <Header className="App-header" title='Mood Color' data-testid='header-component'/>
      <section className='color-section'>
        <AddColor onColorArrayChange={handleColorArrayChange}/>
        <ListItems colorArray={colors} data-testid='color-container' onDeleteColor={handleDeleteColor} />
      </section>
      <Footer data-testid='footer-component'/>
    </div>
  );
}

export default App;


