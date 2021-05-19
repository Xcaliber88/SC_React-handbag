import React from "react";

function Tile (props){
    return(
        <section>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <img src={props.image} />

        </section>

    )
}

export default Tile;