import React, { useState } from 'react'

const todo = () => {
  const[tasks, setTasks]=useState([ "Eat Breakfast","Take a shower", "walk with dog "]);
  const[newTask, setNewTask] =useState("");
  function handleInputChange(event){
    setNewTask(event.target.value)

  }
  function addTask(){
    if(newTask.trim()!=="")
    {
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }

  }
  function deleteTask(index){
     const updatedTasks=tasks.filter((_, i)=>i!==index);
     setTasks(updatedTasks); 
  }
  function moveTaskUp(index){

  }
  function moveTaskDown(index){

  }
  return (<>
  <div className='to-do-list'></div>
  <h1>To-Do-List</h1>
  <div>
    <input  type='text' placeholder ='enter a task' onChange={handleInputChange}/>
   <button onClick={addTask }>add</button>
   
  </div>
  <ol>
    {tasks.map((task,index)=>
    <li key={index}>
      <span>{task}</span>
      <button  onClick={()=> deleteTask(index)}>
        Delete
      </button>
      <button  onClick={()=> moveTaskUp(index)}>
      UP
      </button>
   <   button  onClick={()=> moveTaskDown(index)}>
   DOWN
      </button>

    </li>)}
  </ol>
  </>

)

}

export default todo