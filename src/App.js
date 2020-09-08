import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Results from './Results'
import Nav from './Nav';
import requests from './requests'

function App() {
   //selctedOption allows the results to change with what nav title is selected
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
