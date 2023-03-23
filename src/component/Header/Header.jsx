import React from 'react';
import nile_logo from '../../img/header/nike_logo.svg'
import shop from '../../img/header/shopping-cart.svg'


import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = ({cart}) => {




    return (<header className={style.header}>
            <div className={style.header__container}>
                <Link to="/" ><img src={nile_logo} alt="nike_logo"/> </Link>
                <ul className={style.header__categories}>
                    <li><a className={style.header__item} href="/#">Home</a></li>
                    <li><a className={style.header__item} href="/#info">Information</a></li>
                    <li><a className={style.header__item}  href="/#store">Store</a></li>
                </ul>
                <div className={style.header__search-shop}>
                    <Link to="/Cart">
                        <img className={style.shop} src={shop} alt="shop"/>
                        <div className={style.count_cart}>{cart.countCart}</div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;