import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'
//..........data & time ......................
import {sub} from 'date-fns' 




const initialState = [
    {id:"1",
    title:"Afuh Chris",
    content:"I want pizza and rotten tomatoes ",
    date:sub(new Date(),{minutes: 10}).toISOString() ,
    //......................................
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
    //......................................
},

    {id:"2",
    title:"Forbi steve",
    content:"He eats alot and plays alot of video games",
    date:sub(new Date(),{minutes: 5}).toISOString() ,
    //......................................
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
    //......................................
}
]


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
    postAdd :{   
    reducer(state,action){
            state.push(action.payload)
        },
       
        prepare(title,content,userId){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    
                    date:new Date().toISOString(),
                    
                    userId,
                    //.......................
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }
                    //.......................
                    
                    
                
                }
            }
        }
        

    },
    //..........action to set the reactions .............
    reactionAdded(state,action){
        const {postId,reaction} = action.payload 
        const existingPost = state.find(post => post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
    //..................................................................
}
})


export const getAllpost = (state) => state.posts


//.............................................................
export const {postAdd,reactionAdded} = postSlice.actions
//.............................................................
// export const {postAdd} = postSlice.actions

export default postSlice.reducer