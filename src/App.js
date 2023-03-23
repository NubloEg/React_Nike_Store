import './App.css';
import Header from "./component/Header/Header";
import {Main, Cart, BuyShoes} from "./page/"
import {Route, Routes} from "react-router";
import {useSelector} from "react-redux";


function App() {
    const state=useSelector(state=>state)
  return (
    <div className="App">
        <Header cart={state.cart}/>
        <Routes className='content'>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/Cart'} element={<Cart items={state.cart.allItem} allCount={state.cart.countCart} allMoney={state.cart.allBuy}/>}/>
            <Route path={'/BuyShoes/*'} element={<BuyShoes shoes_red={state.buy_shoes}/>}/>
        </Routes>
    </div>
  );
}

export default App;
