import React from 'react';

const Label = (props)=>{
    const {text} = props;
    return(
        <div className="label-containerStyle">
            <label className = "style-label">
                {text}
            </label>
        </div>
    )
};

export default Label;