import React, { useState } from 'react'
import { Input,Form, FormGroup,Label } from 'reactstrap'
import Cb2 from './AltNav';

export default function ChechkBox(deger) {
const {message}=deger;
// const [baslik,setbaslik] = useState("reactive");
// const [count,setcount] = useState(0)
  const [message1,setMessage1] = useState(message);
  const message2 = [message]
  function handleclick(e){
 
//       const Listitems = message2.map((numbers)=>
//       <li>{numbers}</li>
      
//      );
console.log(message);
   
  
  }
 
  return (
    <div>

      <Form>
<FormGroup className='check'>
      <ul>
            <li>
            <Label check>
       learn  Html
   
      </Label>
            </li>
            <li>
            <hr></hr>
      <Label check>
       css
      </Label>

            </li>
            <li>
            <hr></hr>
      <Label check>
       javascript
      </Label>
         
                 <hr></hr>
      <Label check>
       
      </Label>
          </li>

            {/* <li key={message}>
       
            </li> */}
            <a class="nav-link" onClick={handleclick}  href="#">ekle</a>
       
      </ul>




<Cb2 data ={message}></Cb2>

</FormGroup>
      </Form>
      {/* <Mer title={baslik}/>
      <button onClick={() => {setbaslik("değişti")}}>değiştir</button>
       
    <p>{count}</p> */}
 

    </div>
  )
}



function Mer(props){

  return (
      <div>

{props.title}
      </div>
  );

}