import React from "react";

function Button({buttonType, isDisabled, clickHandler, children}){
    return (
        <button type={buttonType} disabled={isDisabled} onClick={clickHandler}>
            {children}
        </button>
    )
}

export default Button;