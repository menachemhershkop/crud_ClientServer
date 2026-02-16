import { useState } from 'react';
import './App.css'

function App() {
  const [Tasks, setTasks] = useState([])
  const [task, setTask] = useState({
    id:0,
    title:"",
    isDone:false
  })


  async function getAllTask() {
    const res = await fetch('http://localhost:8080/getalltasks')
    const data = await res.json()
    console.log(data);
    setTasks(data.data);
    
  }
  async function addTask() {
    const res = await fetch('http://localhost:8080/addtask',{
      method:'post',
      headers:{"Content-Type": "application/json",},
      body:JSON.stringify(task)
    })
    const msg = await res.json()
    console.log(msg);

    
  }
  async function editTask() {
    console.log(task);
    
    const res = await fetch(`http://localhost:8080/edittask/${task.id}`,{
      method:'put',
      headers:{"Content-Type": "application/json",},
      body:JSON.stringify(task)
    })
    const msg = await res.json()
    console.log(msg);

    
  }
  async function deleteTask() {
    console.log(task);
    
    const res = await fetch(`http://localhost:8080/deletetask/${task.id}`,{
      method:'delete',
      headers:{"Content-Type": "application/json",},
      body:JSON.stringify(task)
    })
    const msg = await res.json()
   

    
  }
  

  return (
    <>
      <section>
        <h1>Get Task</h1>
        <button onClick={getAllTask}>Get All Task</button>
        <div>
          {Tasks.map((item)=>{
            
             
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.isDone}</p>
              </div>
            
          })}
        </div>
      </section>
        <section>
        <h1>Add Task</h1>
        <button onClick={addTask}>Add Task</button>
          <div>
            <input type="text" placeholder='title' onChange={(e)=>{setTask({...task,title:e.target.value})}}/>
            <input type="text" placeholder='id'  onChange={(e)=>{setTask({...task,id:e.target.value})}}/>
            <input type="text" placeholder='isDone' value={false}  onChange={(e)=>{setTask({...task,isDone:e.target.value})}}/>
          </div>
      </section>
        <section>
        <h1>Edit Task</h1>
        <button onClick={editTask}>Edit Task</button>
          <div>
            <input type="text" placeholder='title' onChange={(e)=>{setTask({...task,title:e.target.value})}}/>
            <input type="text" placeholder='id'  onChange={(e)=>{setTask({...task,id:e.target.value})}}/>
            <input type="text" placeholder='isDone' value={false}  onChange={(e)=>{setTask({...task,isDone:e.target.value})}}/>
          </div>
      </section>
      <section>
        <h1>Delete Task</h1>
        <button onClick={deleteTask}>Delete Task</button>
        <div>
          <input type="text" placeholder='id'  onChange={(e)=>{setTask({...task,id:e.target.value})}}/>
          </div>  
       
      </section>
    </>
  )
}

export default App
