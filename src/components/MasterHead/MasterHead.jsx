import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import ytLogo from './yt_logo_rgb_dark.png' 
import { useNavigate } from 'react-router-dom';

export default function MasterHead() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  }
  const handleCange = (e) => {
    setText((prev) => e.target.value);
  }
  return (
    <header className='flex justify-between w-9/12 m-auto p-3 after: border-b after: border-solid after: border-neutral-500'>
      <button>
        <img src={ytLogo} alt="" className='w-24 h-5'/>
      </button>
      <form onSubmit={handleSubmit} className='flex justify-center w-8/12'>
        <input type="text" placeholder='Search...' value={text} onChange={handleCange} className='w-4/5 p-1 outline-none'/>
        <button className='flex w-8 h-8 bg-neutral-500 justify-center items-center text-xl text-white'>
          <HiMagnifyingGlass />
        </button>
      </form>
      <div className=''></div>
    </header>
  );
}

