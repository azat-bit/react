import React, { Component } from 'react';
import { useState } from 'react';
import { CreditCard, PaymentsForm } from 'react-square-web-payments-sdk';
export default class Azat extends Component {
  render() {

    return (
      <>
      
      
      <div>
     
    
    
    
     <MyButton></MyButton>
     <MyButton></MyButton>
     <MyButton></MyButton>
     </div> 
      <div>
     
    
      <MyButton></MyButton>
     <MyButton></MyButton>
     <MyButton></MyButton>
    
     
     </div>
         <div>
     
    
         <MyButton></MyButton>
     <MyButton></MyButton>
     <MyButton></MyButton>
      
      </div>
   
      
      </>
   
      
    )
  }
}

function MyButton({value}) {
   const [count, setCount] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = count.slice();
   nextSquares[0]="X";
  setCount(nextSquares);
   

  }

  return (
    <button   onClick={handleClick}
    >
        </button>
      
    
  );
}


