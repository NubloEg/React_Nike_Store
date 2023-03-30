import React from 'react';
import style from "./Cart.module.css";
import minus from "../../img/cart/minus.png";
import plus from "../../img/cart/plus.png";

const CartItem = ({dispatch,name,size,money,count,color,price}) => {

    const plusFN=()=>{
        dispatch({
            type:'PLUS_ITEM',
            payload:{
                name,
                money,
                size,
                color,
                price,
                count:1,
            }
        })
    }

    const minusFN=()=>{
        dispatch({
            type:'MINUS_ITEM',
            payload:{
                name,
                money,
                size,
                color,
                price,
                count:1,
            }
        })
    }
    return (
        <div className={style.cart__item}>
            <div className={style.cart__info}>
                <div className={style.cart__name}>
                    {name}
                </div>
                <div className={style.cart_tth}>
                    <div className={style.cart__size}>
                        {`Размер : ${size}`}
                    </div>
                    <div className={style.cart__color}>

                        {`Цвет :`}{<div className={`${style.cart__clr} ${color}`}></div>}
                    </div>
                </div>
            </div>
            <div className={style.cart__counter}>
                <img className={style.cart__icon} onClick={minusFN} src={minus} alt=""/>
                <div className={style.cart__num}>{count}</div>
                <img className={style.cart__icon} onClick={plusFN} src={plus} alt=""/>

            </div>
            <div className={style.cart__money}>${money}</div>
        </div>
    );
};

export default CartItem;