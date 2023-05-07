import './App.css';
import Info from './Components/Info/Info';
import Exercises from './Components/Exercises/Exercises';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  const [totalTime, setTotalTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const profile = {
    name: 'John Doe',
    location: 'Dhaka, Bangladesh',
    weight: '60kg',
    age: '21yrs',
    height: 5.5
  };
  let total = 0;
  const addToList = time =>{
    setTotalTime(time + totalTime);
  }
  const secClicked = time =>{
      const id = 'btn-sec'+time.toString();
      console.log(id);
      for(let i=10;i<=50;i+=10){
        const idDeactivate = 'btn-sec'+i.toString();
        document.getElementById(idDeactivate).style.backgroundColor = 'white';
      }
      document.getElementById(id).style.backgroundColor = '#5D5FEF';
      setBreakTime(time);
  }
  return (
    <div className="App">
      <Exercises addToList={addToList}></Exercises>
      <div id='info'>
          <Info profile={profile} secClicked={secClicked}></Info>
          <div id='details'>
              <h3>Exercise Details</h3>
              <div className='time'>
                  <h4>Exercise Time</h4>
                  <h5>{totalTime} seconds</h5>
              </div>
              <div className='time'>
                  <h4>Break Time</h4>
                  <h5>{breakTime} seconds</h5>
              </div>
          </div>
          <div>
            <button onClick={() => toast('Task Completed Successfully')} id='finish-btn'>Activity Completed</button>
            <ToastContainer />
          </div>
      </div>
    </div>
  );
}

export default App;
