import React from "react";

const ProductCard = ({name, price, image}) => {
    return(
        <div className="card">
            <img src="{image}"className="card-img-top" alt="{name}" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;