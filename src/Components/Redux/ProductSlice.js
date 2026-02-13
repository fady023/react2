import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    items:[]
}

export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.items.push(action.payload);

        },

        removeFromCart : (state,action)=>{
            const itemId = action.payload.id

            let removed = false 

            state.items = state.items.filter(item=>{

                if(!removed && item.id === itemId){
                    removed = true;
                    return false
                }
                return true
            })


        }
    }
})
export default ProductSlice