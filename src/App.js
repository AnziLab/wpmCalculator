import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator.js';


const App =()=>{
  return (
    <div>
      <div className="title">
        <h1> WPM Calculator! </h1>
      </div>
      <div className="contentBox">
        <Calculator/>
         </div>
    </div>
  );
}


export default App;
