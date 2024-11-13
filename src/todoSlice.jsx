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
     deleteTask:(state,actions)=>{
        console.log(actions.payload)
        // state.task=state.task.filter(item=>item.id!=actions.payload)
        state.task=state.task.filter(function(key){
            if(key.id==actions.payload)
            {
                return false
            }
            else
            {
                return true
            }
        })
     },
     completeTask:(state,actions)=>{
     for(var i=0;i<state.task.length;i++)
     {
        if(state.task[i].id==actions.payload)
        {
            state.task[i].status=true
        }
     }
     },
      uncompleteTask:(state,actions)=>{
        for(var i=0;i<state.task.length;i++)
        {
            if(state.task[i].id==actions.payload)
            {
                state.task[i].status=false
            }
        }

      },
      editTask:(state,actions)=>{
        for(var i=0;i<state.task.length;i++)
        {
            if(state.task[i].id==actions.payload.myid)
            {
                state.task[i].work=actions.payload.mywork
            }
        }
      }


    }
})
export const {addTask,deleteTask,completeTask,uncompleteTask,editTask}=todoSlice.actions;
export default todoSlice.reducer;