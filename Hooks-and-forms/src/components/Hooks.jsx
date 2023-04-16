import React, { useState } from 'react'

const Hooks = (props) => {

  const [firstName, setFirstName] =useState ("");
  const [lastName,setLastName] =useState ("");
  const [email, setEmail] =useState ("");
  const [password, setPassword] =useState ("");
  const [confirmPassword,setConfirmPassword] =useState ("");

  // const <form action="style" = {textAlign:center} ></form>
  return (
    <div>
      <div className="row">
        <h1>User</h1>
        <form action="" className="col-md-4 offset-1">
          <div className="form-group"> 
          {/* movie.title && movie.title.length < 3 ? <p> title must be more than 3 charecters</p>: null or "" */}
            <label htmlFor="firstname">First Name</label> 
            <input type="text" className="form-control" id="firstname" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group"> 
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastName" onChange={(e) => setFirstName(e.target.value)}/>  
          </div>
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" name="email" onChange={(e) => setFirstName(e.target.value)}/>
          <div className="form-group"> 
          </div>
          <div className="form-group"> 
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={(e) => setFirstName(e.target.value)}/>
          <button className="btn btn-primary mt-3">Login</button>        
          </form>
      </div>
    </div>
  )
}

export default Hooks
