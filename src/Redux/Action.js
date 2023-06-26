export const addCartdata=(data )=>{
    console.log("data",data)
   return{
    type: "ADDCARTDATA",
    payload:data
   }
}
export const delCartdata=(data )=>{
    return{
     type: "DELCARTDATA",
     payload:data
    }
 }