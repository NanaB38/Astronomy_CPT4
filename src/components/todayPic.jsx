import React from 'react';

export default function todayPic({ nasaPic }) {
  return (
    nasaPic && (
      <>
        <div className='fixed flex justify-center flex-col w-[50%] h-full'>
          <div className='w-[50%] m-auto'>
            <h1>{nasaPic.title}</h1>
            <h2>{nasaPic.date}</h2>
            <img className='' src={nasaPic.url} alt={nasaPic.title} />
            <p className='text-black'>{nasaPic.explanation}</p>
          </div>
        </div>
      </>
    )
  );
}
