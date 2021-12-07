import {useState} from 'react';
import Select from './components/Select/Select';
import './App.css';

 



const App = () => {
  const [selected, setSelected] = useState("Select one");

  return (
  <Select  selected={selected} setSelected={setSelected} />
  )
}
export default App;

