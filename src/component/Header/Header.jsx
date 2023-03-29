import React, {useState} from 'react';
import nile_logo from '../../img/header/nike_logo.svg'
import shop from '../../img/header/shopping-cart.svg'


import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = ({cart}) => {

    const [hiddenPop,setHiddenPop]=useState(true)


    return (<header className={style.header}>
            <div className={style.header__container}>
                <Link to="/" ><img src={nile_logo} alt="nike_logo"/> </Link>
                <ul className={style.header__categories}>
                    <li><a className={style.header__item} href="/#">Home</a></li>
                    <li><a className={style.header__item} href="/#info">Information</a></li>
                    <li><a className={style.header__item}  href="/#store">Store</a></li>

                </ul>
                <a  className={'popup__btn'} onClick={()=>{
                    setHiddenPop(false)}}>MENU</a>
                <div className={hiddenPop?'popup disable':'popup'}>
                    <a  onClick={()=>setHiddenPop(true)} className={'popup__close'}>close</a>
                    <div className={'popup__items'}>
                        <a href="/#" className={'popup__item'}>Home</a>
                        <a href="/#info" className={'popup__item'}>Information</a>
                        <a href="/#store" className={'popup__item'}>Store</a>
                    </div>
                </div>
                <div className={style.header__search-shop}>
                    <Link className={style.shop__container}  to="/Cart">
                        <img className={style.shop} src={shop} alt="shop"/>
                        <div className={style.count_cart}>{cart.countCart}</div>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;