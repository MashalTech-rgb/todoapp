"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [MainTask, setMainTask]=useState("")

  const submitHandling = (e) => {
    e.preventDefault();
setMainTask([...MainTask,{title,desc}]);
    setTitle("");
    setDesc("");
  };
const renderTask=<h1>No task Available</h1>
  return (
    <>
      <h1 className='heading'>My To-Do-App</h1>
      <form onSubmit={submitHandling}>
        <input 
          type='text' 
          className='Description' 
          placeholder='Enter Title Here'
          value={title} 
          onChange={(e) => {
            console.log("Title input:", e.target.value); // Log the input
            setTitle(e.target.value);
          }}
        />
        <input 
          type='text' 
          className='Description' 
          placeholder='Enter Description Here'
          value={desc} 
          onChange={(e) => {
            console.log("Description input:", e.target.value); // Log the input
            setDesc(e.target.value);
          }}
        />
        <button className='btn'>Add Task</button>
      </form>
      <div className='tasks'>
        {renderTask}
      </div>
    </>
  );
};

export default Page;
