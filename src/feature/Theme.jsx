  import { createSlice } from "@reduxjs/toolkit";

  const theme=createSlice({
    name:`color`,
    initialState:{value:{color:''}},
    reducers:{
        change:(state,action)=>{
             state.value=action.payload
        }
    }
  })
  
  export const {change}=theme.actions
  export const themeReducer=theme.reducer