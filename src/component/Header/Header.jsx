import React, {useState} from 'react';
import nile_logo from '../../img/header/nike_logo.svg'
import shop from '../../img/header/shopping-cart.svg'


import style from './Header.module.css'
import {Link} from "react-router-dom";


const Header = ({cart,main}) => {

    const [hiddenPop,setHiddenPop]=useState(true)


    return (<header className={ main?style.header:`${style.header} ${style.no_menu}` }>

            <div className={style.header__container}>
                <Link  to="/" ><img className={ main?'':style.invert } src={nile_logo} alt="nike_logo"/> </Link>
                {main?<> <ul className={style.header__categories}>
                    <li><a className={style.header__item}  href="/#">Home</a></li>
                    <li><a className={style.header__item} href="/#info">Information</a></li>
                    <li><a className={style.header__item}  href="/#store">Store</a></li>

                </ul>
                    <div   className={'popup__btn'} onClick={()=>{setHiddenPop(false)}}>MENU</div>
                    <div className={hiddenPop?'popup disable':'popup'}>
                        <div   onClick={()=>setHiddenPop(true)} className={'popup__close'}>CLOSE</div>
                        <div className={'popup__items'}>
                            <a href="/#" className={'popup__item'}>Home</a>
                            <a href="/#info" className={'popup__item'}>Information</a>
                            <a href="/#store" className={'popup__item'}>Store</a>
                        </div>
                    </div></>:<></>}
                <div className={style.header__search-shop}>
                    <Link  className={style.shop__container}  to="/Cart">
                        <img className={ main?style.shop:`${style.shop} ${style.invert}` }  src={shop} alt="shop"/>
                        <div className={style.count_cart}>{cart.countCart}</div>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;