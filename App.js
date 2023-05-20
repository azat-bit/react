
import React, { Component } from 'react';



import Azat from './component/Azat';

import Desen from './component/Desen.css';



import Resim1 from './component/Van.jpg'



export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <img className='Resim1' src={Resim1}>

  
        </img>
        <h4> 
          
        VAN'A HOŞ GELDİNİZ
       
        </h4>
      
        <Azat></Azat>
    
      
      </div>
    );
  }
}

