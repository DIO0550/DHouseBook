import React from 'react';
import './App.scss';
import DateControlComponent from './Component/Molecules/DateControlComponent';
import PurchasedListFunction from './Function/Atoms/PurchasedListFunction';

function App() {
  return (
    <div className="App">
      <DateControlComponent />
      <PurchasedListFunction />
    </div>
  );
}

export default App;