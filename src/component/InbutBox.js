import React, { useState } from 'react'
import { Input } from 'reactstrap'
import Cb1 from './ChechkBox';

export default function InbutBox() {
  //  const [deger,setdeger] =useState([{value:''}]);

  const initialList = [
    {
      
      name: '',
    }
    
  ];
   const [name,setname] =useState('');
   const [list, setList] = React.useState(initialList);
  function handlechane(props){
  
  
    setname(props.target.value);

  }

  function handleclick(e){
 
    const Listitems = list.concat({name});
     
    setList(Listitems);
    

    console.log("mng"+name);
  
  }
  function dele(e){
 
    // const Listitems = list.pop({name});
     
    // setList(Listitems);
    

    // console.log("del"+name);
  
  }

 
  return (
    <div>
        <header>

       
        {/* <Input type='button' value={deger} onClick={ (e) => {handlechange(e)} }></Input> */}
        <Input  type='string' onChange={ (props) => handlechane(props)}  placeholder='Add New'></Input>
       
      <ul>


      
        {list.map((item) => (
          <li key={item.id}>{item.name}      <hr></hr></li>
        ))}
  

      </ul>
      <Cb1 message ={name} liste ={list}></Cb1> 
      <a class="nav-link" onClick={e=>{handleclick(e)}}  href="#">ekle</a>
      <a class="nav-link" onClick={e=>{dele(e)}}  href="#">sil</a>
         {/* <Input type='button'  onClick={ e=>{handleclick(e)} }></Input>  */}
 

    {/* bir alttaki componente gönderirken altaki key değeri ile aynı olması lazım */}

        </header>
        {/* <p>{deger}</p> */}
    </div>
  )
}
