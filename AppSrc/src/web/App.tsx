import React from 'react';
import './App.scss';
import DateControlComponent from './Component/Molecules/DateControlComponent';
import PurchasedListComponent from './Component/Atoms/PurchasedListComponent';

function App() {
  return (
    <div className="App">
      <DateControlComponent />
      <PurchasedListComponent />
    </div>
  );
}

export default App;