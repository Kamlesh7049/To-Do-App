import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask ,deleteTask,completeTask ,uncompleteTask,editTask} from "./todoSlice";

const App = () => {
  const [mywork, setMywork] = useState("");
  const [btnStatus,setBtnStatus]=useState(true);
  const [abtnStatus,setABtnStatus]=useState(false)
  const [myid,setMyid]=useState("");
  const dispatch = useDispatch();
  const workData = useSelector((state) => state.todo.task);
  console.log(workData);

  const handleSumit=()=>{
    // dispatch(addTask(mywork));//A
    dispatch(addTask({id:Date.now(), work:mywork,status:false}))//B
  }

  const deletework=(id)=>{
    dispatch(deleteTask(id));
  }

  const completework=(id)=>{
    dispatch(completeTask(id));
    setABtnStatus(false)

  }
  const uncompletework=(id)=>{
    dispatch(uncompleteTask(id));
    setABtnStatus(true)
  }

  const editData=(id,work)=>{
    setMywork(work)
    setBtnStatus(false);
    setMyid(id)
  }

  const editDataSave=()=>{
    dispatch(editTask({myid,mywork}))
    setMywork("");
    setBtnStatus(true)
  }


let sno=0;
const ans=workData.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.status ?
       <span style={{color:"red",textDecoration:"line-through"}}>
        {key.work}
        </span> :
        <span style={{color:"blue", textDecoration:"none"}}>
          {key.work}
        </span>}
        </td>
      <td>
      <button onClick={()=>{deletework(key.id)}}>Delete</button>
      </td>
      <td>
        {abtnStatus ?
        <button onClick={()=>{completework(key.id)}}>Complete</button>
      
      :
        <button onClick={()=>{uncompletework(key.id)}}>unComplete</button>
        }
        </td>

      <td>
        <button onClick={()=>{editData(key.id,key.work)}}>Edit</button>
      </td>

    </tr>
    </>
  )
})

  return (
    <>
      <center>
        <h1>To Do App</h1>
        <hr size="1" color="blue" />
        Enter your Task : <input type="text" value={mywork} onChange={(e)=>{setMywork(e.target.value)}} />
        {btnStatus ?
        <button onClick={handleSumit}>Add</button>:
        <button onClick={editDataSave}>EditSave</button>}
        <hr />
        <table border="1">
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {ans}
        </table>
      </center>
    </>
  );
};

export default App;
