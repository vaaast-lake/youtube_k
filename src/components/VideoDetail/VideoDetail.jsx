import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoDetail({ content }) {

  const { id = {}, snippet = {} } = content;
  const { videoId } = id;
  const { channelTitle, title, publishTime, thumbnails = {} } = snippet;

  const currentTime = new Date();
  const publishedTime = new Date(publishTime);
  const timeDiff = timeCalc(currentTime, publishedTime);

  const unescapeTitle = unescapeHtml(title);
  const navigate = useNavigate();

  return (
    <li key={videoId} className='flex flex-col flex-wrap w-44 p-1'>
      <img 
        src={thumbnails.medium.url} 
        alt="thumbnail"
        onClick={() => {navigate(`videos/watch/${videoId}`)}} 
        className='w-full h-24 hover:cursor-pointer' />
      <span className='font-medium text-sm text-neutral-50'>{unescapeTitle}</span>
      <span className='text-xs text-neutral-400'>{channelTitle}</span>
      <span className='text-xs text-neutral-400'>{timeDiff}</span>
    </li>
  );
}

function timeCalc(currenTime, publishedTime) {
  const timeDiff = currenTime - publishedTime;
  let result;

  const timeObj = [
    {time: Math.floor(timeDiff / 1000), name: "sec"},
    {time: Math.floor(timeDiff / 1000 / 60), name: "mins"},
    {time: Math.floor(timeDiff / 1000 / 60 / 60), name: "hours"},
    {time: Math.floor(timeDiff / 1000 / 60 / 60 / 24), name: "days"},
    {time: Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 7), name: "weeks"},
    {time: Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 7 / 4), name: "month"},
    {time: Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 7 / 4 / 12), name: "years"},
  ]

  for (let i = timeObj.length - 1; i > -1; i--) {
    const {time, name} = timeObj[i];
    if (time) {
      result = `${time} ${name} ago`
      break;
    }
  }

  return result;
}

function unescapeHtml( text ) {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}