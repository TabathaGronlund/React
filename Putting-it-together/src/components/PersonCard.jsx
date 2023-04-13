import React, { useState } from "react";


const PersonCard = (props) => {
    const {initialAge} =props
    const [agePlus, setAgePlus] = useState(
        props.initialAge
    );
    const handleClick = () => {
        setAgePlus({initialAge: agePlus.initialAge + 1});
    }
    return (

        <div>
            <h1>
                Name: {props.firstName} {props.lastName} {initialAge}
            </h1>
            <p>
                age: {agePlus}
            </p>
            <p>
                Hair Color: {props.hairColor}
            </p>
            <button onClick={ (event) => setAgePlus(agePlus+1)}>{props.firstName} Birthday Button</button>
        </div>
    );
}

export default PersonCard;














// import React, { useState } from "react";


// const PersonCard = (props) => {
//     const [state,setState] = useState({ 
//         clickCount:0
//     })   
//     return (
//         <div>
//             <h1>
//                 Name: {props.firstName} {props.lastName}
//             </h1>
//             <p>
//                 age: {props.age}
//             </p>
//             <p>
//                 Hair Color: {props.hairColor}
//             </p>
//         <button onClick={ handleClick }>click to count</button>
//         </div>
//     );
// }

// export default PersonCard;
