import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import ContentDiv from './components/ContentDiv.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContentDiv />
    </div> 
  );
}

export default App;
