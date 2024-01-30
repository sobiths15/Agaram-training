import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        registerState:{
            name:'',
            email:'',
            password:'',
            phone:''
        },
        loginState:{
            email:'',
            password:''
        },
        userState:{},
        isUserLogged:false,
        userPreference:0
            
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
        },
        updateisUserLogged:(state,action)=>{          
            state.isUserLogged=action.payload
        },
        updateuserPreference:(state,action)=>{          
            state.userPreference=action.payload
        }


    }
})

export const {updateRegister,updateLogin,updateUsers,updateisUserLogged,updateuserPreference} =userSlice.actions;
export default userSlice.reducer;