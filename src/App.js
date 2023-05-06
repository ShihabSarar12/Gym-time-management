import './App.css';
import Info from './Components/Info/Info';
import Exercises from './Components/Exercises/Exercises';

function App() {
  const profile = {
    name: 'John Doe',
    location: 'Dhaka, Bangladesh',
    weight: '60kg',
    age: '21yrs',
    height: 5.5
  };
  return (
    <div className="App">
      <Exercises></Exercises>
      <Info profile={profile}></Info>
    </div>
  );
}

export default App;
