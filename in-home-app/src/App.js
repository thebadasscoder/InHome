import React from 'react';
import Signup from './components/signup.js';
import Navbar from './components/navbar.js';
import './stylesheets/components/_app.scss';

function App() {
  return (
    <div className="grid-container">
      <Signup/>
      <Navbar/>
    </div>
  );
}
export default App;
