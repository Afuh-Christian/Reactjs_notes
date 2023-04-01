import { createSlice } from "@reduxjs/toolkit";

//................................................................
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('posts/fetchUsers',async () => {

    try{
        const response = await axios.get(USER_URL) 
        return [...response.data];
    }catch(err){
        return err.message
    }
})

//................................................................

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
//.............................Here we are looking just for one case ..................
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled,(state,action) => {
            return action.payload // replaces the user sate completely
        })
    }
//..............................................................
})


export const getAllUsers = (state) => state.users


export default userSlice.reducer  


