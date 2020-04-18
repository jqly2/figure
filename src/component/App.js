import React from 'react';
import '../external/css/App.css';
import Header from './landing/header.js';
import Slider from './landing/slideshow.js';
import News from './landing/new.js'
import About from './landing/about.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <News />
      <About />
    </div>
  );
}

export default App;
