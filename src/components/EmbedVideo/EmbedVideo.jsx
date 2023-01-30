import React from 'react';
import { useParams } from 'react-router-dom';

export default function EmbedVideo() {
  const {embedId} = useParams();
  return (
    <section id="videoContainer">
      <iframe
        id='player'
        type='text/html'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder="0"
        height='360'
        width='640'
      >
      </iframe>
    </section>
  );
}

