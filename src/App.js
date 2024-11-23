import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;