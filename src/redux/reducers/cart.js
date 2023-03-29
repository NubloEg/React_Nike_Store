const initialState={
    countCart:0,
    allItem:[],
    allBuy:0,
}


const cart=(state=initialState,action)=>{
    let elem=0;
    let newItem=[]
    const findItem=()=> {

        if(state.allItem.length===0){
           return elem
        }else{

            state.allItem.forEach(el=>{
                    if (el.name===action.payload.name){
                        elem=el;

                    }
                }

            )
        }

    }

    function plusItem(bool){
        newItem=state.allItem;
        newItem.map(el=>{
            if (el.name===elem.name){
               if (bool){
                   el.money+=elem.price
                   el.count+=1
               }else{
                   el.money-=elem.price
                   el.count-=1


               }
            }
        })
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
            findItem()
            plusItem(true)


            return {
                ...state,
                countCart: state.countCart+1,
                allBuy:state.allBuy+ elem.price,
                allItem: newItem
            }
        case"MINUS_ITEM":

            findItem()
            plusItem(false)


            return {
                ...state,
                countCart: state.countCart-1,
                allBuy:state.allBuy- elem.price,
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