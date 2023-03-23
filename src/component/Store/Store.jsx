import React from 'react';
import style from './Store.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const Store = ({category}) => {

    const boots_red=useSelector(state=>state.boots)
    const dispatcher=useDispatch()

    const changeShoes=(boots)=>{
        dispatcher({
            type:'CHANGE_SHOES',
            payload:boots
        })
    }





    const onCategoryActive=(name)=>{


        dispatcher({
            type:'CHANGE_CATEGORY',
            payload:name
        })
    }

    return (<section  className={style.store}>
    <div id={"store"} className={style.store__container}>
        <div  className={style.store__label}>Our store</div>
        <div  className={style.store__categorys}>
            {
                category.map((el,i)=><Link key={i} onClick={()=>onCategoryActive(el)} className={el===boots_red.category?style.store__category__active:style.store__category} to="#">{el}</Link>)}


        </div>

        <div className={style.available__items}>
            {
                boots_red.category==="All"?boots_red.boots.map((el,ind)=><Link onClick={()=>changeShoes(el)} key={ind} to={`/BuyShoes/${ind+1}`} className={style.available__item}>
                    <img  src={require(`../../img/available/boots/${el.img}.png`)} alt="boots"/>
                    <div className={style.store__name}>{el.name}</div>
                    <div className={style.store__btn}>${el.money}</div>
                </Link>):
                    boots_red.boots.map((el,ind)=>{if (el.category===boots_red.category){
                      return <Link onClick={()=>changeShoes(el)} key={ind} to={`/BuyShoes/${ind+1}`} className={style.available__item}>
                            <img  src={require(`../../img/available/boots/${el.img}.png`)} alt="boots"/>
                            <div className={style.store__name}>{el.name}</div>
                            <div className={style.store__btn}>${el.money}</div>
                        </Link>
                    }})
            }

           
        </div>
    </div>
</section>
    
    );
};

export default Store;

