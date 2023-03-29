import React from "react";
import style from '../component/Cart/Cart.module.css'
import arrow from "../img/buyshoes/arrow-left.svg";
import noItem from "../img/cart/noitem.png"
import {Link} from "react-router-dom";
import CartItem from "../component/Cart/CartItem";
import {useDispatch} from "react-redux";


const Cart =({items,allCount,allMoney})=>{
    const dispatch=useDispatch()

    const removeItems=()=>{

        if (allMoney!==0){
            if (window.confirm(`Совершить покупку на сумму ${allMoney}$?`)){
                dispatch({type:'CLEAR_ITEM'})
            }
        }


    }

    return(
        <div className={style.cart}>
            <div className={style.cart__container}>
                <Link to={'/'} className={style.cart__back}>
                    <img src={arrow} alt=""/>
                    Home
                </Link>

                
                <div className={style.cart__content}>
                {items.length===0?<div className={style.noitem__container}>
                        < img className={style.noitem} src={noItem} alt=""/>
                        <div className={style.text__noitem}>Добавьте товар в корзину</div>
                    </div>: <>
                     <div className={style.cart__items}>

                            { items.map((el,i)=><CartItem dispatch={dispatch} key={i} name={el.name} size={el.size} money={el.money} count={el.count} color={el.color} />)

                            }
                        </div>
                        <div className={style.cart__all__info}>
                        <div className={style.cart__all__count}>
                        Всего пар: {allCount} шт
                        </div>
                        <div className={style.cart__all__money}>
                        Сумма заказа: ${allMoney}
                        </div>
                        </div>

                    <div className={style.btn__pay}>
                        <div onClick={removeItems} className={style.btn__pay__txt}>Оплатить сейчас</div>
                    </div></>}
                   
                </div>
                <div className={style.label_background}>Nike</div>
            </div>
        </div>

    )
}
export default Cart