import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{value:{name:'',age:'',email:''}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
            localStorage.setItem('name',state.value.name)
        },
        logout:(state,action)=>{
            state.value={name:'',age:'',email:''}
        }
    }
})
export default userSlice.reducer;
export const {login}=userSlice.actions;
export const {logout}=userSlice.actions;