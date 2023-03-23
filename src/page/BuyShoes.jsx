import React from "react";

import Shoes from "../component/Shoes/Shoes";





const BuyShoes =({shoes_red})=>{


    return(<Shoes sizes={shoes_red.size} colors={shoes_red.color} name={shoes_red.name} description={shoes_red.description} money={shoes_red.money} img={shoes_red.img}/>
    )
}
export default BuyShoes