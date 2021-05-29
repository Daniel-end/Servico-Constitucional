import React from 'react';
const Input = (props)=>{
    const {attribute, handleChange, params} = props;
    //attribute can solve to id, name, placeholder and type
    //handleChange is to hanle the event onChange
    return(
        <div>
            <input
            id = {attribute.id}
            name = {attribute.name}
            placeholder = {attribute.placeholder}
            type = {attribute.type} 
            onChange = {(e)=>handleChange(e.target.name, e.target.value)}
            className ={params ? 'inputError' : "regular-style"}
            />
        </div>
    )
};

export default Input;