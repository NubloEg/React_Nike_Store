import React from "react";

import Shoes from "../component/Shoes/Shoes";
import Header from "../component/Header/Header";





const BuyShoes =({shoes_red,cart})=>{


    return(<>
            <Header cart={cart} main={false} />
            <Shoes disabled={cart.disableItem.filter(el=>el===shoes_red.name).length!==0} sizes={shoes_red.size} colors={shoes_red.color} name={shoes_red.name} description={shoes_red.description} money={shoes_red.money} img={shoes_red.img}/>
    </>


    )
}
export default BuyShoes