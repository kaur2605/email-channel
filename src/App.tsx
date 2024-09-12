
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailContainer from './containers/EmailContainer';
import Navbar from './components/Navbar';



const App: React.FC = () => {

  // for all routes
  return (
  <div>

    
    <Navbar/>
    <EmailContainer/>
  </div>
  );
}

export default App
