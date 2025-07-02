import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title3 from "./Title3.jsx";
import { Title4 } from "./Title4.jsx";
import { Title5,Title6 } from './Title5.jsx';
// import {Adddd,nameee} from"./Adddd.jsx";
// import Naam from "./Naam.jsx";
import {Title,Titleadd} from "./Title.jsx"

// function Title(){
//   return(
//    < h2>I am  title  1</h2>
//   );
// }
function Title2(){
  return(
    <h2>I am title 2</h2>
  );
}

function App() {

  return  (
    // this is the one way 
  // <div id='mainBox' className='App'>
  //   <h1>this is 1st title !</h1>
  //   <Title/>
  //   <h1>this is 2nd title !!</h1>
  //   <Title2/>
  //   <h1>this is 3rd title !!!</h1>
  //   <Title3/>
  //   <h1>this is a 4th title !!!!</h1>
  //   <Title4/>
  //   <h1>this is a 5th title !!!!</h1>
  //   <Title5/>
  //   <h1>this is a 6th title !!!!</h1>
  //   <Title5/>
  //   </div>

  // this is the second way to write the code 
  // <>
  //   <h1>this is 1st title !</h1>
  //   <Title/>
  //   <h1>this is 2nd title !!</h1>
  //   <Title2/>
  //   <h1>this is 3rd title !!!</h1>
  //   <Title3/>
  //   <h1>this is a 4th title !!!!</h1>
  //   <Title4/>
  //   <h1>this is a 5th title !!!!</h1>
  //   <Title5/>
  //   <h1>this is a 6th title !!!!</h1>
  //   <Title6/>
  //   </>

  // The next Content 
  // <>
  // <Title/>
  // <Titleadd/>
  // </>
<>
<h1>new App 1</h1>

</>
  );
   
}

export default App
