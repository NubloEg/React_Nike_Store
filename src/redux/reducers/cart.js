const initialState={
    countCart:0,
    allItem:[],
    allBuy:0,
}


const cart=(state=initialState,action)=>{
    let elem;

    const findItem=()=> {
        if(state.allItem.length!==0){
            state.allItem.forEach(el=>{
                if (el.name===action.payload.name){
                    console.log(el)
                    return el
                }

            })
        }else{
            return 0
        }

    }

    switch (action.type) {

        case"ADD_ITEM":

            return {

                ...state,
                countCart: action.payload.count,
                allBuy:state.allBuy+ action.payload.buy,
                allItem: [...state.allItem,
                    {
                        ...action.payload.shoes,
                        count:findItem()+1
                    }]
            }
        case"PLUS_ITEM":
            elem=findItem()
            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ action.payload.buy,
                allItem: [...state.allItem,
                    {
                        ...action.payload.shoes,
                        count:elem.count+1
                    }]
            }
        case"MINUS_ITEM":
            elem=findItem()
            return {
                ...state,
                countCart: state.countCart-1,
                allBuy:state.allBuy+ action.payload.buy,
                allItem: [...state.allItem,
                    {
                        ...action.payload.shoes,
                        count:elem.count+1
                    }]
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