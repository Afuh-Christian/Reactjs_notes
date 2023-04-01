import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:"1",name:"Dembele"},
    {id:"2",name: "Pulisic"},
    {id:"3",name: "Ansu asdf"}
]

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{}
})

export const {} = userSlice.actions

//.............users from the sign_up_Form - objects - users /app/store.js.............
export const getAllUsers = (state) => state.users
//.......................................................................


export default userSlice.reducer  


