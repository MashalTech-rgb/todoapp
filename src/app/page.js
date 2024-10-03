import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='heading'>My To-Do-App</h1>
      <from>
      <input type='text' className='Description' placeholder='Enter Title'/>
      <input type='text' className='Description' placeholder='Enter Description'/>
      <br/>
      <button className='btn'>Click Here  to Add Task</button>
      </from>
    </>
  )
}

export default page;