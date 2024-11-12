import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:{
        task:[]
    },
    reducers:{
     addTask:(state,actions)=>{
        console.log(actions.payload)
        //  let wrk=actions.payload
        //  let mydata={id:Date.now(),work:wrk}
        //  state.task.push(mydata)
        state.task.push(actions.payload);//B
     },

    }
})
export const {addTask}=todoSlice.actions;
export default todoSlice.reducer;