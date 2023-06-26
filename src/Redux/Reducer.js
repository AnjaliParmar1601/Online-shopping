const initialState ={
    data:[]
}
export const Reducer=(state=initialState,action)=>{
    console.log("action",action)
    switch(action.type){
        case "ADDCARTDATA":
            return{data:[...state.data,action.payload]}
            case "DELCARTDATA":
            default:
             return initialState
    }

}