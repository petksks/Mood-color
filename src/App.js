import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Color } from './constants/colors'
import AddColor from './components/AddColor';

function App() {

  //const [colors, setColors] = useState(Color);

  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem('colors');
    return storedColors ? JSON.parse(storedColors) : Color;
  });

  //const [idCounter, setIdCounter] = useState(1); 
  
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const handleColorArrayChange = (newColor) => {
    const storedColors = localStorage.getItem('colors');
    const parsedColors = storedColors ? JSON.parse(storedColors) : Color;
  
    const maxNumber = parsedColors.reduce((max, color) => {
      const match = color.title.match(/My Color (\d+)/);
      if (match) {
        return Math.max(max, parseInt(match[1]));
      }
      return max;
    }, 0);
  
    const newName = `My Color ${maxNumber + 1}`;
  
    setColors((prevColors) => {
      const updatedColors = [
        ...prevColors,
        { id: newName, color: newColor.hex, title: newName }
      ];
      return updatedColors;
    }); 
  };

  const handleDeleteColor = (id) => {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  
    const reOrderedColors = updatedColors.map((color, index) => {
      const newName = `My Color ${index + 1}`;
      return {
        ...color,
        id: newName,
        title: newName
      };
    });
    setColors(reOrderedColors);
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


