
import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard
      firstName = {"Jane"}
      lastName = {"Doe"}
      age = {45}
      hairColor={"Black"}
      />
      <PersonCard
      firstName={"john"}
      lastName={"Smith"}
      age={88}
      hairColor={"Black"}
      />
      <PersonCard
      firstName={"Millard"}
      lastName={"Fillmore"}
      age={50}
      hairColor={'Brown'}
      />
      <PersonCard 
      firstName={"Maria"}
      lastName={"Smith"}
      age={62}
      hairColor={"Brown"}
      />
    </div>
  );
}

export default App;