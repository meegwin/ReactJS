import React from 'react';
import './App.css';
import StateLessComponets from './Components/StateLessComponents';
import StateFull, {StateFullComponents} from './Components/StateFullComponents';
function App() {
  return (
      <div>
        <StateLessComponets/>
        <StateFull/>
      </div>
  );
}

export default App;
