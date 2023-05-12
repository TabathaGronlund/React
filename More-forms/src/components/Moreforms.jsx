import React, {useState} from 'react'

const Moreforms = () => {
    // const [firstName,setFirstName] = useState("");
    // const [lastName,setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });



    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    return (


        <div>
            <h1>Functional Form</h1>
                <div className="row">
                    <form action="" className="col-md-4 offset-1">
                        <div className="form-group">
                            {user.firstName.length < 2? <p>Name must be more than 2 characters</p>: null}
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                        {user.lastName.length < 2? <p>Last Name must be more than 2 characters</p>: null}
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                        {user.email.length < 2? <p>Email must at least be 2 characters</p>: null}
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                        <p>Password must be at least 8 characters</p>
                        <p>Password must match</p>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={changeHandler}/>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Moreforms

// {/* <input type="text" className="form-control" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>usestate */}


    //     setFirstName ({
    //         ...firstName,
    //         [e.target.name]: e.target.value
    //     })
    //     setLastName({
    //         ...lastName,
    //         [e.target.name]: e.target.value
    //     })
    //     setEmail ({
    //         ...email,
    //         [e.target.name]: e.target.value
    //     })
    //     setPassword ({
    //         ...password,
    //         [e.target.name]: e.target.value
    //     })
    //     setConfirmPassword ({
    //         ...confirmPassword
    //         [e.target.name]: e.target.value
    //     })