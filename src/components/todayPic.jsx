import React from 'react';

export default function todayPic({ nasaPic }) {
  return (
    nasaPic && (
      <>
        <div className='flex w-full'>
          <img src={nasaPic.url} alt={nasaPic.title} />
          <p>todayPic</p>
        </div>
      </>
    )
  );
}
