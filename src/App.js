import './App.css';
import Button from '@mui/material/Button';
import Counter from './components/Count';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={(e) => dispatch({ type : "INCREMENT"})} variant="contained">Increment</Button>
      <Counter />
      <Button onClick={(e) => dispatch({ type : "DECREMENT"})} variant="contained">Decrement</Button>
    </>

  );

}

export default App;
