import { createSlice } from "@reduxjs/toolkit";




const initialState = [
    {id:"1",title:"Afuh Chris",content:"I want pizza and rotten tomatoes "},
    {id:"2",title:"Forbi steve",content:"He eats alot and plays alot of video games"}
]


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        //.....add an item .... but we do not mutate element in react this easily without useState .....
        postAdd:(state,action) => {
            state.push(action.payload)
        }
        //..........This is using IMR Js....work's only in the createSliice()..............................
    }

})


//.....................To ease work ..so you set the values no matter the nature of the property,,list,dict,value etc...................................
export const getAllpost = (state) => state.posts
//........................................................



export const {postAdd} = postSlice.actions
export default postSlice.reducer





































