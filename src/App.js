import './App.css';
import {Main, Cart, BuyShoes} from "./page/"
import {Route, Routes} from "react-router";
import {useSelector} from "react-redux";
import React from "react";


function App() {

    const state=useSelector(state=>state)

  return (

    <div className="App">
        <Routes className='content'>
            <Route path={'/'}  element={<Main cart={state.cart}/>}/>
            <Route path={'/Cart'} element={<Cart cart={state.cart}  items={state.cart.allItem} allCount={state.cart.countCart} allMoney={state.cart.allBuy}/>}/>
            <Route path={'/BuyShoes/*'} element={<BuyShoes cart={state.cart}   shoes_red={state.buy_shoes} />}/>
        </Routes>
    </div>
  );
}

export default App;
