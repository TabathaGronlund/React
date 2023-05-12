import React from 'react'

const FormOne = (props) => {
  const {boxStyle, setBoxStyle,boxArray, setBoxArray,addBox, changeHandler,allBoxStyle} = props => {}
  return (
    <div>
      <form onSubmit={addBox} style={{backgroundColor: 'red'}}>
      <label> Color
                    <input type="color" name="color" value={allBoxStyle.color} onChange={changeHandler}></input>
                </label>
                <label> Height
                    <input type="number" name="height" value={allBoxStyle.height} onChange={changeHandler}></input>
                </label>
                <label> Width
                    <input type="number" name="width" value={allBoxStyle.width} onChange={changeHandler}></input>
                </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormOne
