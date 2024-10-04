"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandling = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    let copyTask = [...MainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className='heading2'>No Task Available</h2>;
  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className='render'>
            <h5 className='heading5'>{t.title}</h5>
            <h5 className='heading5'>{t.desc}</h5>
            <button className='button ' onClick={() => deleteHandler(i)}>Delete</button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='heading1'>My To-Do-App</h1>
      <form onSubmit={submitHandling}>
        <input 
          type='text' 
          className='Description' 
          placeholder='Enter Title Here'
          value={title} 
          onChange={(e) => {
            console.log("Title input:", e.target.value);
            setTitle(e.target.value);
          }}
        />
        
        <input 
          type='text' 
          className='Description' 
          placeholder='Enter Description Here'
          value={desc} 
          onChange={(e) => {
            console.log("Description input:", e.target.value);
            setDesc(e.target.value);
          }}
        />
    
        <button className='btn'>Click here to Add Task</button>
      </form>
      <div className='tasks'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;
