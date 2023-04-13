import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        // age={45}
        initialAge={45}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        // age={88}
        initialAge={88}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
