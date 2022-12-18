import React, {useState, useEffect} from 'react';

import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';
import filterList from './components/filterList';
import './CSS/Oncet.css';
import Footer from './Footer';

const CineApp = () => {

  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  const setCategories = (size) => {
    const Categories = [...selectedCategories];
    
    if(Categories.includes(size)) {
      const index = Categories.indexOf(size);
      Categories.splice(index, 1);
    }
    else {
      Categories.push(size);
    }
    setSelectedCategories(Categories);
    setProducts(filterList(Categories, 'size'));
  }

  const sortProducts = (method) => {
    const array = products;

    if(method === "Lowest to Highest") {
        array.sort(function(a, b){
          return a.price-b.price
      })
    }
    else if(method === "Highest to Lowest") {
        array.sort(function(a, b){
          return b.price-a.price
      })
    }
    setProducts(array);
  }

  const addToCart = (item) => {
    const productList = [...cart];
    if(!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
    if(e === '+') {
      productList[index].quantity++;
    }
    else {
      if(productList[index].quantity > 1) {
        productList[index].quantity--;
      }
      else {
        productList.splice(index, 1);
      }
    } 
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }
  
  return (
    <div>
        <article>
        <header className='nav' data-testid = 'nav'>
            <div className='logo'>
            <img  src = "https://i.ibb.co/b17yNf9/logo.png" className='logojapon' data-testid="logo"/>
            </div>
      <Categories selectedCategories={selectedCategories} setCategories={setCategories} />
      <Cart products={cart} changeQuantity={changeQuantity}/>
      </header>
      <div className='background'>
      </div>
      <div className='prod'>
      <Products products={products} sortProducts={sortProducts} addToCart={addToCart} />
      
      </div>
    <Footer />
    </article>

    </div>
    
  );
}

export default CineApp;