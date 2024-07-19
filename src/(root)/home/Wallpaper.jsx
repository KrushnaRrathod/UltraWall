import React from 'react';
import { useNavigate } from 'react-router-dom';


const Wallpaper = ({ src, title }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/preview/${title.toLowerCase()}`)
    }

  return (
    <div className='border-2 border-black max-w-[400px] rounded-sm hover:cursor-pointer' onClick={handleClick}>
      <div className='relative w-full h-[300px]'>  {/* Set fixed dimensions for the image container */}
        <img src={src} alt={title} className='w-full h-full object-cover' />
        <div className='absolute font-semibold top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white'>
          <p className='text-3xl'>{title}</p>
        </div>
      </div>
      <div>
        <p className='py-5 px-3 text-xl'>{title}</p>
      </div>
    </div>
  );
};

export default Wallpaper;
