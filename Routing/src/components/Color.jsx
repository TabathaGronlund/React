    import { useNavigate } from 'react-router-dom';
    import { useParams } from 'react-router-dom';
import React from 'react'

const Color = () => {

  const {word, color,bgcolor} =useParams();
  
  const {name} = useParams();
  const navigate = useNavigate();
  const nextPage = (e) => {
  e.preventDefault();
  navigate ("/");
  }
  
  return (
    <div>
      { isNaN (word)?
      <h1 style= {
        color?{color: col,backgroundColor: bgcolor}:null
      }>
      This is a word: {"word"}
      </h1>
      :
      <p>
        This is a number: {word}
      </p>
    }
      <h1>The word is "Hello"🐱‍💻</h1>
      <hr></hr>
      <button onClick={nextPage} >Next Page.➡</button>

    </div>
  )
}

export default Color









