import React from 'react';
import './App.scss';
import DateComponent  from './Component/Atoms/DateComponent'
import NextMonthComponent from './Component/Atoms/NextMonthComponent';
import BackMonthComponent from './Component/Atoms/BackMonthComponent';

function App() {
  return (
    <div className="App">
      <BackMonthComponent />
      <DateComponent />
      <NextMonthComponent />
    </div>
  );
}

export default App;