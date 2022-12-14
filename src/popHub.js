import React, {useState, useEffect} from 'react';
import Movies from './components/Movies';
import Cart from './components/Cart';
import filterList from './components/filterList';
import './CSS/popHub.css';
import Footer from './Footer';

const CineApp = () => {

  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    setMovies(filterList([], null));
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  const sortMovies = (method) => {
    const array = movies;

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
    else if(method === "A - Z") {
      array.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    })
    } 
    else if(method === "Z - A") {
    array.sort(function(a, b){
      if(a.title.toLowerCase() > b.title.toLowerCase()) return -1;
    })
    } else if(method === "Oldest to Newest") {
      array.sort(function(a, b){
        return a.Year-b.Year
    })
    }else if(method === "Newest to Oldest") {
      array.sort(function(a, b){
        return b.Year-a.Year
    })
    }
    setMovies(array);
  }

  const addToCart = (item) => {
    const productList = [...cart];
    if(!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    productList[index].cartPrice = productList[index].quantity * productList[index].price;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
  
    if(e === '+') {
      productList[index].quantity++;
      productList[index].cartPrice = productList[index].quantity * productList[index].price;
    }
    else if (e === '-'){
      if(productList[index].quantity > 1) {
        productList[index].quantity--;
        productList[index].cartPrice = productList[index].cartPrice - productList[index].price;
      }
      else {
        productList[index].quantity--;
        productList.splice(index, 1);
  
      }
    } 
    else if (e === '<'){
      productList[index].quantity = 0;
      productList.splice(index, 1);
    }
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }
  
  
  return (
    <div>
        <article>
        <header className='nav' data-testid = 'nav'>
            <div className='logo'>
              <img  src = {require("./components/logo.png")} alt='logo' className='logojapon' data-testid="logo"/>
            </div>
        
      <Cart products={cart} changeQuantity={changeQuantity}/>
      </header>
      <div className='background'>
      </div>
      <div className='prod' data-testid="productslist">
      <div className="featured">
        <h3>Stream Premium Movies Online</h3>
        <p>With our best catalogue of the newest and best movies, stream and rent online and on-demand</p>
        <p>for the lowest price!</p>
      </div>
      <Movies products={movies} sortProducts={sortMovies} addToCart={addToCart} /> 
      </div>
    <Footer />
    </article>
    </div>
    
  );
}

export default CineApp;