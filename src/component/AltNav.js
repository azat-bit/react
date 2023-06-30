import React from 'react'
import { FaBeer } from 'react-icons/fa';

export default function AltNav(deger1) {
  const  {data} = deger1;
  
  function handleclick(e){
    console.log(data);
  
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">


   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
      <FaBeer></FaBeer> 
        <li class="nav-item">
          <a class="nav-link" onClick={e=>{handleclick(e)}}  href="#">ekle</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">sil</a>
        </li>
    
       
          </ul>
      </nav>
    </div>
  )
}
