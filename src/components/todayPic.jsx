import React from 'react';

export default function todayPic({ nasaPic }) {
  return (
    nasaPic && (
      <>
        <div className='fixed flex justify-center flex-col w-[50%] h-full'>
          <div className='w-[50%] m-auto'>
            {' '}
            <img className='' src={nasaPic.url} alt={nasaPic.title} />
            <p className='text-black'>{nasaPic.title}</p>
          </div>
        </div>
      </>
    )
  );
}
