import React from "react";


function Product(props) {
    return (
        <article>
            <span>{props.label}</span>
            <img src={props.image}/>
            <p> {props.productName} </p>
            <h4>{props.price} </h4>
        </article>
    )


}

export default Product;