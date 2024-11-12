import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./todoSlice";

const App = () => {
  const [mywork, setMywork] = useState("");
  const dispatch = useDispatch();
  const workData = useSelector((state) => state.todo.task);
  console.log(workData);

  const handleSumit=()=>{
    // dispatch(addTask(mywork));//A
    dispatch(addTask({id:Date.now(), work:mywork}))//B
  }


let sno=0;
const ans=workData.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      <td> Complite</td>
      <td> UnComplite</td>
      <td> Delete</td>
      <td> Edit  </td>

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
        <button onClick={handleSumit}>Add</button>
        <hr />
        <table>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Actoion</th>
          </tr>
          {ans}
        </table>
      </center>
    </>
  );
};

export default App;
