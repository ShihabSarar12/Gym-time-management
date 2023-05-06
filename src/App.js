import './App.css';
import Info from './Components/Info/Info';
import Exercises from './Components/Exercises/Exercises';
import { useState } from 'react';

const App = () =>{
  const profile = {
    name: 'John Doe',
    location: 'Dhaka, Bangladesh',
    weight: '60kg',
    age: '21yrs',
    height: 5.5
  };
  let total = 0;
  const addToList = time =>{
    total += time;
    localStorage.setItem('time',total);
  }
  return (
    <div className="App">
      <Exercises addToList={addToList}></Exercises>
      <Info profile={profile}></Info>
    </div>
  );
}

export default App;
