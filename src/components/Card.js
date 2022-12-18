import React from 'react'

const Card = ({data, addToCart}) => {
    return (
        <div className="card" >
            <img src={data.img} className="card-image" alt="product" title={data.title} />
            <h3 className="card-title">{data.title}</h3>
            <p className="price"><span>PHP {data.price} /Day</span></p>
            <button className="add-to-cart" data-testid ="addtocart" onClick={() => addToCart(data)}>Add to cart</button>
        </div>
    )
}

export default Card;