import React from "react";

function Button(props) {
    return (
        <button type="button" onClick={() => console.log(props.text)} disabled={props.mode}>
            {props.text}
        </button>
    )

}

export default Button