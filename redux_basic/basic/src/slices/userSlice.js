import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        registerState:{},
        loginState:{},
        userState:{}
            
    },
    reducers:{
        updateRegister:(state,action)=>{
            console.log(action)
            // state.name="sobith"
            state.registerState=action.payload
        },
        updateLogin:(state,action)=>{          
            state.loginState=action.payload
        },
        updateUsers:(state,action)=>{          
            state.userState=action.payload
        }


    }
})

export const {updateRegister,updateLogin,updateUsers} =userSlice.actions;
export default userSlice.reducer;