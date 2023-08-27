import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL='https://connections-api.herokuapp.com';
function setToken(token){
    axios.defaults.headers.common.Authorization=`Bearer ${token}`;
}
export const login = createAsyncThunk('auth/login', async (credentials, thinkApi)=>{
    try{
        const data = await axios.post("users/login", credentials);
        setToken(data.data.token);
        localStorage.setItem("token",data.data.token);
        return data.data;
    }catch(error){
        console.log(error);
    }
    
});

export const logout = createAsyncThunk('auth/refresh',async ()=>{
    const data = await axios.post("/users/logout");
    axios.defaults.headers.common.Authorization='';
    localStorage.removeItem("token");
    return data.data
})

export const refresh = createAsyncThunk('auth/refreshh', async (_, thunkAPI)=>{
    const token = localStorage.getItem("token");
    
    if(token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        
        try{
            const data = await axios.get("/users/current");
            return data.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);

        }
    
    
})