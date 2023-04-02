const initialState={
    name:"NIKE M2K TEKNO",
    description:'Top shoes,gangsta black',
    size:[38,39,43,44],
    color:['red','blue'],
    money:120,
    img:"Boots_1",

}


const buy_shoes=(state=initialState,action)=>{

    switch (action.type) {

        case"CHANGE_SHOES":
            return {
                ...state,
                name:action.payload.name,
                description:action.payload.description,
                size:action.payload.size,
                color:action.payload.color,
                money:action.payload.money,
                img:action.payload.img,
            }
        default:
            return state
    }

}

export default buy_shoes;