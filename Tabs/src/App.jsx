import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import DisplayBoxColor from './components/DisplayBoxColor';

function App() {

  const [tabArray, setTabArray] = useState([<Form />, <FormOne />, <FormTwo />])

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

  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })

  const handleTabChange = (e, idx) => {
    e.preventDefault()
    console.log("INDEX---->", idx)
    if (idx === 0) {
      setDisplayTab({
        tab1: true,
        tab2: false,
        tab3: false
      })
    }
    if (idx === 1) {
        setDisplayTab({
          tab1: false,
          tab2: true,
          tab3: false
        })
    }
    if (idx === 2) {
          setDisplayTab({
            tab1: false,
            tab2: false,
            tab3: true
          })
        }
      }

      return (

        <div className='container'>

          <ul>
            {
              tabArray.map((tab, i) => (
                <div key={i}><button className='tab-links' 
                onClick={(e) => handleTabChange(e, i)}>{`Tab ${i}`}</button></div>
              ))
            }
          </ul>
``


          {
            displayTab.tab1 ? <Form boxStyle={boxStyle} setBoxStyle={setBoxStyle} 
            boxArray={boxArray} setBoxArray={setBoxArray}
            addBox={addBox}
            changeHandler={changeHandler}
            /> : null
          }


          {
            displayTab.tab2 ? <FormOne boxStyle={boxStyle} setBoxStyle={setBoxStyle} 
            boxArray={boxArray} setBoxArray={setBoxArray}
            addBox={addBox}
            changeHandler={changeHandler}
            /> : null
          }


          {
            displayTab.tab3 ? <FormTwo boxStyle={boxStyle} setBoxStyle={setBoxStyle}
            boxArray={boxArray} setBoxArray={setBoxArray}
            addBox={addBox}
            changeHandler={changeHandler}
            /> : null
          }


          <DisplayBoxColor boxArray={boxArray} setBoxArray={setBoxArray}/>



          {/* <Form boxstyle={boxStyle} setBoxStyle={setBoxStyle} />
      <FormOne boxstyle={boxStyle} setBoxStyle={setBoxStyle} />
      <FormTwo boxstyle={boxStyle} setBoxStyle={setBoxStyle} /> */}
        </div>
      );
    }

    export default App;
