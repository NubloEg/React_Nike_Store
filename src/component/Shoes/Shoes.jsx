import React, {useState} from 'react';

import {Link} from "react-router-dom";
import arrow from "../../img/buyshoes/arrow-left.svg";


import style from './Shoes.module.css'
import {useDispatch} from "react-redux";


const Shoes = ({sizes,colors,name,money,description,img,disabled}) => {
    window.scrollTo(0, 0)
    const dispatch=useDispatch()
    const [size,setSize]=useState(sizes[0])
    const [color,setColor]=useState('red')


    const addItem=()=>{
       if(!disabled){
           dispatch({
               type:'ADD_ITEM',
               payload:{
                   name,
                   money,
                   size,
                   color,
                   price:money,
                   count:1,
               },
           })
       }
    }

    return (<div className={style.buy_shoes}>
        <div className={style.buy_shoes__container}>
            <Link to={'/'} className={style.buy_shoes__back}>
                <img src={arrow} alt=""/>
                Home
            </Link>
            <div className={style.buy_shoes__content}>
                <div className={style.buy_shoes__info}>
                    <div className={style.buy_shoes__name}>{name}
                    </div>
                    <div className={style.buy_shoes__description}>{description}
                    </div>
                    <div className={style.buy_shoes__buy}>
                        <Link onClick={addItem}  className={disabled?style.disable:style.buy_shoes__btn} to="#">ADD TO BAG</Link>
                        <div className={style.buy_shoes__sale}>${money}</div>
                    </div>
                    <div className={style.buy_shoes__sizes}>
                        {sizes.map((el,i)=><div onClick={()=>setSize(el)} key={i} className={el===size?`${style.buy_shoes__size} ${style.size__active}`:`${style.buy_shoes__size} `}>{el}</div>)}


                    </div>
                    <div className={style.buy_shoes__colors}>
                        {colors.map((el,i)=><div onClick={()=>setColor(el)} key={i} className={el===color?`${style.buy_shoes__color} ${el} ${style.color_active}`:`${style.buy_shoes__color} ${el} `} ></div>)}

                    </div>
                </div>
                <img className={style.buy_shoes__shoes} src={require(`../../img/buyshoes/boots/${img}.png`)} alt=""/>
            </div>

        </div>
    </div>);
};

export default Shoes;

