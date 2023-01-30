import React from 'react';
import VideoDetail from '../VideoDetail/VideoDetail';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';

export default function VideoList() {
  const {searchId} = useParams();
  const fetchData = async () => {
    return axios.get(`${!searchId ? 'videos/main' : searchId}.json`);
  }

  const {isLoading, error, data: contents} = useQuery(
    [searchId],
    fetchData, {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  
  if (isLoading) return <Loading />;
  if (error) return <NotFound />;

  const {items = [], nextPageToken} = contents.data;

  console.log(items);

  return (
    <section className='m-auto max-w-screen-lg justify-center '>
      <ul className='flex flex-wrap max-w-screen-lg justify-center p-1'>
        {
          items && items.map(content => (
            <VideoDetail 
              content={content}
            />
          ))
        }
      </ul>
    </section>
  );
}