import React from 'react';

export default function TodayPic({ nasaPic }) {
  return (
    nasaPic && (
      <>
        <div className='flex justify-center items-center flex-col w-full h-full'>
          <div className='w-[50%] m-auto flex items-center '>
            <h1>{nasaPic.title}</h1>
            <h2>{nasaPic.date}</h2>
            <img className='' src={nasaPic.url} alt={nasaPic.title} />
            <p className='text-black text-2xl'>{nasaPic.explanation}</p>
          </div>
        </div>
      </>
    )
  );
}
