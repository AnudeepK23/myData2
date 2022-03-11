import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/actio';
import './App.css';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return <div>
    <div className='cointainer'>
      <h1>Increment/Decrement</h1>
    <h4>Welcome Gold</h4>
    <div className='quantity'>
      <a className='quantity_minus' title="Decrement"
      onClick = {() => dispatch(decNumber())}><span> - </span></a>
      <input name="quantity" type="text" className='quantity_input' value={myState} />
      <a className='quantity_plus' title="Increment"
      onClick={() => dispatch(incNumber(5))}><span> + </span></a>
    </div>
    </div>
    
  </div>;
}

export default App;
