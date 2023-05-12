import React from 'react'

const DisplayBoxColor = ({boxArray}) => {
  return (
    <div>
      {
        boxArray.map((oneBoxColor,index)=> (
          <div key={index } style={{
            backgroundColor:oneBoxColor.color,
            height:`${oneBoxColor.height}px`, 
            width:`${oneBoxColor.width}px`}}>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayBoxColor
