const initialState={
    countCart:0,
    allItem:[],
    allBuy:0,
}


const cart=(state=initialState,action)=>{
    let newItem=[]

    function changeItem(bool){

        newItem=state.allItem;

        newItem.map(el=>{

            if (el.name===action.payload.name){


                if (bool){

                    el.money+=action.payload.price

                    el.count+=1
                }else{

                    if (el.count===1){
                        removeItem()

                    }else{
                        el.money-=action.payload.price
                        el.count-=1
                    }


                }
            }

            })

       
    }

    const removeItem=()=>{
        newItem=newItem.filter(el=>el.name!==action.payload.name)

    }

    const addItem=()=>{
        newItem.push(action.payload)
    }


    switch (action.type) {
        case"ADD_ITEM":
            addItem()
            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ action.payload.price,
                allItem: newItem
            }

        case"PLUS_ITEM":
            changeItem(true)
            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ action.payload.price,
                allItem: newItem
            }
        case"MINUS_ITEM":
            changeItem(false)


            return {
                ...state,
                countCart: state.countCart-1,
                allBuy:state.allBuy- action.payload.price,
                allItem: newItem
            }
        case"CLEAR_ITEM":
            return {
                ...state,
                countCart: 0,
                allBuy:0,
                allItem: []
            }
        default:
            return state
    }

}

export default cart;