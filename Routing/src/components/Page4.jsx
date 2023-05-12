import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Page4 = () => {

  const {number} = useParams();
  const navigate = useNavigate();
  const nextPage = (e) => {
  e.preventDefault();
  navigate ("/Color");
  }

  return (
    <div>
      <h1> The number is:{number}🐱‍💻</h1>
      <hr></hr>
      <button onClick={nextPage}>Next Page.➡</button>

    </div>
  )
}

export default Page4

