import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Color } from './constants/colors'
import AddColor from './components/AddColor';

function App() {

  const [colors, setColors] = useState(Color); 

  const handleColorArrayChange = (newColor) => {
    setColors([...colors, newColor]);
  };  

  return (
    <div className="App">
      <Header className="App-header" title='Mood Color' />
      <ListItems colorArray={colors} />
      <AddColor onColorArrayChange={handleColorArrayChange} />
      <Footer />
    </div>
  );
}

export default App;
