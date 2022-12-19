import React, {useState} from 'react';

import CardList from './CardList';

const Movies = ({products, sortProducts, addToCart}) =>  {

    const [value, setValue] = useState('Select');
    
    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }
    
    return (
        <div className="products" data-testId="product">
            <div className="products-nav">
                <div className="sort-list" data-testid="sort">
                    Sort by&nbsp;: &nbsp;
                    <select value={value} onChange={setList}>
                        <option value="Choose">Choose</option>
                        <option value="Highest to Lowest">Highest to Lowest</option>
                        <option value="Lowest to Highest">Lowest to Highest</option>
                        <option value="A - Z">A - Z</option>
                        <option value="Z - A">Z - A</option>
                        <option value="Oldest to Newest">Oldest to Newest</option>
                        <option value="Newest to Oldest">Newest to Oldest</option>
                    </select>
                </div>
            </div>

            <CardList products={products} addToCart={addToCart} />
            
        </div>
    )
}

export default Movies;