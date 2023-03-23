import React from 'react';
import shoes from '../../img/order/start_shoes.png'
import style from './Order.module.css'



const Order = () => {
    return (
    <section className={style.order}>
        <div className={style.order__container}>
        <div className={style.order__title}>Nike shoe collection</div>
        <div className={style.order__midle}>
            <div className={style.order__buy}>
                <div id={""} className={style.order__h1}>Just do it, then do it again</div>
                <div id="info" className={style.oreder__mainbtn}> <a href="#store" className={style.order__btn}>Store now</a></div>
            </div>
            <div  className={style.order__shoes}>
                <div  className={style.order__shoes__title}>
                    NIKE
                </div>
                <img className={style.order__shoes__img} src={shoes} alt=""/>
            </div>
        </div>
        
       
    </div>
    <div  className={style.order__items}>
        <div  className={style.order__item }/* style.item */>
            <div className={style.item__title}>Brand</div>
            <div className={style.item__description}>Over 10+ models available for sale</div>
        </div>
        <div className={style.order__item}/* " item" */>
            <div className={style.item__title}>Color</div>
            <div className={style.item__description}>Variety of colors on display, choose to your taste</div>
        </div>
        <div className={style.order__item}>
            <div className={style.item__title}>Price</div>
            <div className={style.item__description}>All products are affordable, buy and get 20% discount</div>
        </div>
    </div>
   </section>
    );
};

export default Order;

