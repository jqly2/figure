import React from 'react';
import '../external/css/App.css';
import Header from './landing/header.js';
import Slider from './landing/slideshow.js';

function App() {
  return (
    <div className="App">
      <Slider />
      <Header />
    </div>
  );
}

export default App;
