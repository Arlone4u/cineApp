import React, {useState} from 'react'

const Card = ({data, addToCart}) => {
    const [imageSrc, setImageSrc] = useState(data.img);

    function handleMouseOver() {
        setImageSrc(data.clip);
      }
      
      function handleMouseOut() {
        setImageSrc(data.img);
      }

    return (
        <div className="card" >
            
           <div className="test">
            <div className="gradient">
            <img src={imageSrc} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="card-image" alt="product" title={data.title} />
            </div>
            <div className="card-info">
            <h3 className="card-title">{data.title}</h3>
            <p className="card-price"><span>PHP {data.price}.00/Day</span></p>
            
            </div>
           </div>
           <button className="add-to-cart" data-testid ="addtocart" onClick={() => addToCart(data)}>Add to cart</button>
        </div>
        
    )
}

export default Card;