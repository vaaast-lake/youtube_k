import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex justify-center w-full h-full'>
      <div className='flex flex-col items-center justify-evenly w-96 h-60 bg-white m-5'>
        <span className='text-3xl'>Sorry, there is no videos</span>
        <span className='text-xl'>Please search the others or click below</span>
        <Link to='/'>go to Main</Link>
      </div>
    </div>
  );
}

