import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Color } from './constants/colors'

function App() {
  return (
    <div className="App">
      <Header className="App-header" title='Mood Color' />
      <ListItems colorArray={Color} />
      <Footer />
    </div>
  );
}

export default App;
