import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import DisplayBoxColor from './components/DisplayBoxColor';

function App() {

  // const [tabArray, setTabArray] = useState([<Form />, <FormOne />, <FormTwo />])

  const [boxStyle, setBoxStyle] = useState({
    //object where we store information
    color: "",
    height: 50,
    width: 50
  })

  const [boxArray,setBoxArray] = useState([])

  const addBox = (e) => {
    e.preventDefault()
    setBoxArray([
    ...boxArray, 
    boxStyle
    ])
  }

  const changeHandler = (e) => {
    setBoxStyle ({
      ...boxStyle,
      [e.target.name]: e.target.value
    })
  }




      return (

        <div className='container'>
      <Form boxstyle={boxStyle} setBoxStyle={setBoxStyle} />
      <FormOne boxstyle={boxStyle} setBoxStyle={setBoxStyle} />
      <FormTwo boxstyle={boxStyle} setBoxStyle={setBoxStyle} />    
      <DisplayBoxColor boxArray={boxArray} setBoxArray={setBoxArray}/>

        </div>
      );
    }

    export default App;
