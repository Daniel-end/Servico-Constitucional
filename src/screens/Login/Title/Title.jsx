import React from 'react';
import './Title.css';
const Title = (props)=>{
    //ESC6
    const{text} = props;
    return(
        <div className = "titleContainer">
            <label className= "titleLabel">{text}</label>
        </div>
        
    );
};

export default Title;