import React from 'react'

export default function FunctionEvents() {
    const handleClick = () =>{
        alert("Click me");
    };
    const handleClickParams = (message) =>{ 
        alert(message);
    }
    return (
        <div>
            <h2>Function Event</h2>
            {/** xu ly su kien trong js thuan */}
            {/* <button onclick="handleClick()">Click me</button> */}
            <button onClick={handleClick}>Click in reactjs</button>
            <button onClick={ () =>handleClickParams("whats sup") }>Click reactjs params</button>
        </div>
    )
}
