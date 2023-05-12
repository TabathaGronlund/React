import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {

  const {name} = useParams();
  return (
    <div>
      <h1>The word is : Hello 🐱‍💻</h1>
      <h2> The word is {name}</h2>
      <hr></hr>
      <button>Next Page.➡</button>
    </div>
  )
}

export default Hello






// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ParamsComponent = (props)=>{

//     const {word, color, bgCol} = useParams();

//     return(
//         <div>

//             {
//                 //This method returns a boolean based on whether the argument is a number
//                 isNaN(word)?  //If word param isn't a number:
//                 <p style={
//                     //If color param exists, then style this element with the values passed in
//                     color? 
//                     {color: color, backgroundColor: bgCol}
//                     :null
//                 }>
//                     This is a word: {word}
//                 </p>
//                 : //If the word param IS a number:
//                 <p>
//                     This is a number: {word}
//                 </p>
//             }

//         </div>
//     )
// }


// export default ParamsComponent;




// import './App.css';
// import Home from './components/Home';
// import ParamsComponent from './components/ParamsComponent';
// import {BrowserRouter, Routes, Route} from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">

//       <Routes>
//         {/* /home is a "hard path". There aren't params in the route. */}
//         <Route element={<Home />} path="/home"/>
//         {/* We have two potential routes/paths  for the ParamsComponent */}
//         <Route element={<ParamsComponent />} path="/:word" />
//         {/* These values (params) can be destructured from the useParam hook and used as variables, 
//         just like values destructured from props! */}
//         <Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
//       </Routes>

//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;

