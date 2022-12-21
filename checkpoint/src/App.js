//import logo from './logo.svg';
import './App.css';
import FullName from './Profile Components/FullName';
import Bio from './Profile Components/Bio';
import Profession from './Profile Components/Profession';
import HandleName from './Profile Components/HandleName';

function App() {
  const HandleEvent=(abc)=> {
    return (
      alert(`Welcome Back ${abc}`)
    )
  }
  return (
    <div className="App">
      <FullName firstName='Firas' lastName= 'Ouni'/>
      <Bio/>
      <Profession/>
      <HandleName HandleEvent={HandleEvent}FirstName="Firas"/>
    </div>
  );
}

export default App;
