import React, { useState } from 'react';

const Incrementdecriment= () =>  {
     const [count ,setCount]= useState(0)
      const  addno =()=>{
            setCount(count+1)
      }
    return (
      <div>
        <h3>Incrementdecriment And Decrement :-</h3>
        <h4> Count is:{count}</h4>
        <button onClick={addno}> Increment </button>
        <button onClick={() => setCount(count - 1)}>Decrement</button> <hr/>
      </div>
    );
}

export default Incrementdecriment;