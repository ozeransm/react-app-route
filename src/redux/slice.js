import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh } from "./operation";
const initialState={
    user:null,
    token:null,
    isLogin:false,
    isRefresh:true
}
const reducerLogin = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builder)=>{
            builder
            .addCase(login.pending,(state,action)=>{
                state.isRefresh=true;
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLogin=true;
                state.isRefresh=false;
                state.token=action.payload.token;
                state.user=action.payload.user;
            })
            .addCase(logout.fulfilled,(state, action)=>{
                state.isLogin=false;
                state.token=null;
                state.user=null;
            })
            .addCase(refresh.pending,(state, action)=>{
                state.isRefresh=true;
            })
            .addCase(refresh.fulfilled,(state, {payload:{name,email}})=>{
                state.isRefresh=false;
                state.isLogin=true;
                state.user={name, email};
                
            })
            .addCase(refresh.rejected,(state, action)=>{
                state.isLogin=false;
                state.isRefresh=false;
            })
            
        }
    
    })
 export const reducer = combineReducers({reducer: reducerLogin.reducer});