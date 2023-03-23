import React from 'react';
import boots1 from '../../img/available/boots/Boots_1.png'
import style from './Store.module.css'
import {Link} from "react-router-dom";


const Store = ({category,boots}) => {

    const [activeCategory,setCategory]=React.useState('All')


    const onCategoryActive=(name)=>{
        setCategory(name)
    }

    return (<section className={style.store}>
    <div className={style.store__container}>
        <div className={style.store__label}>Our store</div>
        <div className={style.store__categorys}>
            {
                category.map(el=><Link onClick={()=>onCategoryActive(el)} className={activeCategory===el?style.store__category__active:style.store__category} to="#">{el}</Link>)}


        </div>
        <div className={style.available__items}>
            {boots.map((el,ind)=><Link to={`/BuyShoes/${ind}`} className={style.available__item}>
                <img className={style.available__img} src={boots1} alt="boots"/>
                <div className={style.store__name}>Air force</div>
                <div className={style.store__btn}>$120</div>
            </Link>)}

           
        </div>
    </div>
</section>
    
    );
};

export default Store;

