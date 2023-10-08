import React from 'react';
import GLBViewer from './MoonViewer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>

        <GLBViewer />
        <DisplayYear year={year} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <RoundButton />
      </div>
    </div>
  );
}

export default App;
