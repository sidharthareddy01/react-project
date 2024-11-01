import React from 'react'
import './User.css'

// const name = window.prompt("enter your name ");
const user = (props) => {
    // return <p>Hello {name}, <br/> Welcome to React tutorial. Your id is {Math.floor(Math.random()*8)}</p>
    return (
    <div className='User'>
        <p onClick={props.clickme} style={props.styleFirst} >Hello {props.name}, Welcome to React tutorial.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.inputName} value={props.name}></input>
    </div>
    );
};

export default user;