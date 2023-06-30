import React, { useState } from 'react'
import './App.css';
import ıb1 from './component/InbutBox.js';


function App() {
  // const [message,setmessage] =useState()
  // function handlechane(props){
  
  
  //   setmessage(props.target.value);

  // }

  return (
    <div>
      <header className="App-header">
     <h1> THİNKS TO DO</h1> 
   {/* {JSON.stringify.(message)} */}
     <ıb1 className="input" 
      ></ıb1>
      </header>
  


    </div>
    
  );
  // console.log("asm"+message);
}

export default App;
