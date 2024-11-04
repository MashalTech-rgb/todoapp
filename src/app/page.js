"use client";
import React, { useState, useEffect } from 'react';
import { getTodo } from './utils/api';

const Page = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodo();
        setTodo(data); // data is now guaranteed to be an array
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
    <div className='Main'>
      <h1 className='bg-black text-white text-xlg font-bold text-center p-5 border'>My To-Do-App</h1>
      {todo.map((item, id) => (
        <div key={id} className='p-2 border flex justify-between items-center'>
          <div>
            <h2 className='text-lg p-5'>{item.id} - {item.todo} {item.completed ? "(Completed)" : ""}</h2>
          </div>
          <div className='flex space-x-2'>
            <button className='bg-black text-white p-3 rounded-lg'>Update</button>
            <button className='bg-black text-white p-3 rounded-lg'>Delete</button>
            <button className='bg-black text-white p-3 rounded-lg'>Done</button>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Page;