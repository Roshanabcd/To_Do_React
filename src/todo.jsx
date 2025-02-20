import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk with dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>
      <div>
        <input type='text' placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>UP</button>
            <button onClick={() => moveTaskDown(index)}>DOWN</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
