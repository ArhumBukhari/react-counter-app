import React, { useState } from 'react';
// hello my name is arhum

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
 
  let countStyle = {};

 if (count < 0) {
  countStyle.color = 'red';
 } else {
  countStyle.color = 'black';
 }


  return (
    <div>
      <h2 style={countStyle}>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count <= -10}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default Counter;
