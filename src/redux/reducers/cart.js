const initialState={
    countCart:0,
    allItem:[],
    allBuy:0,
    disableItem:[],
}


const cart=(state=initialState,action)=>{
    let newItem=[]
    let newDisableItem=[]
    function changeItem(bool){
        newDisableItem=state.disableItem
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

        newDisableItem=state.disableItem
        newItem=newItem.filter(el=>el.name!==action.payload.name)
        newDisableItem=newDisableItem.filter(el=>el!==action.payload.name)

    }

    const addItem=()=>{

        newDisableItem=state.disableItem
        newItem=state.allItem
        newItem.push(action.payload)
        newDisableItem.push(action.payload.name)
    }


    switch (action.type) {
        case"ADD_ITEM":
            addItem()
            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ action.payload.price,
                allItem: newItem,
                disableItem:newDisableItem
            }

        case"PLUS_ITEM":
            changeItem(true)
            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ action.payload.price,
                allItem: newItem,
                disableItem:newDisableItem

            }
        case"MINUS_ITEM":
            changeItem(false)


            return {
                ...state,
                countCart: state.countCart-1,
                allBuy:state.allBuy- action.payload.price,
                allItem: newItem,
                disableItem:newDisableItem
            }
        case"CLEAR_ITEM":
            return {
                ...state,
                countCart: 0,
                allBuy:0,
                allItem: [],
                disableItem:[]

            }
        default:
            return state
    }

}

export default cart;