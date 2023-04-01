import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'



const initialState = [
    {id:"1",title:"Afuh Chris",content:"I want pizza and rotten tomatoes "},
    {id:"2",title:"Forbi steve",content:"He eats alot and plays alot of video games"}
]


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
    //......................prepare callback......the create a reducer and a callback...........................
    postAdd :{   
    reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                }
            }
        }
 //.......................................................
    }
}
})


export const getAllpost = (state) => state.posts



export const {postAdd} = postSlice.actions
export default postSlice.reducer