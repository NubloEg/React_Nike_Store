import React from "react";
import Order from "../component/Order/Order"
import Store from "../component/Store/Store"

const Main =()=>{
    return(<>
     <Order/>
        <Store category={['All','Man','Women','Child']} />
        <div className="footer__end">All copyright @ chidi 2023</div></>
       
    )
}
export default Main