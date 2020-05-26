import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import ContentDiv from './components/ContentDiv.jsx';

const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function App() {
  return (
    <div className="App">
      <Navbar pages={pages}/>
      <ContentDiv pages={pages}/>
    </div> 
  );
}

export default App;
