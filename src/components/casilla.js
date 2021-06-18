import React from "react";

const Casilla = (props) =>{

    return(
        <button className="btn btn-outline-primary btn-sm mb-3 casilla" 
                onClick={props.onClick}>{props.value}</button>
    )
}

export default Casilla;