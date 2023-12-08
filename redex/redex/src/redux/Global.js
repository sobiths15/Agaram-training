import { createSlice } from '@reduxjs/toolkit'


export const display = createSlice({
  name: 'user',
  initialState: {
    value: { name :'',age:'',email:''}
  },
  reducers: {
    login:state=>{},
    logout:state=>{state.value={name:'',age:'',email:''}}
  }
})


export const { login } = display.actions

export default display.reducer