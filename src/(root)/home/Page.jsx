import React from 'react'
import {data} from '../../index.js'
import Wallpaper from './Wallpaper.jsx'
import {useNavigate} from 'react-router-dom'

const Hero = () => {
  return(
    <>
      <h1 className='text-5xl'>I'm a designer and web developer.</h1>
    </>
  )
}

const Title = () => {
  return(
    <div className='max-w-[90%] m-auto pt-14 pb-6 lg:max-w-[75%]'>
      <h1 className='text-2xl'>Wallpaper Packs</h1>
    </div>
  )
}

const Main = () => {

  const main = data.map(({ src, title }, index) => {
    return (
      <Wallpaper
        key={index}
        src={src}
        title={title}
      />
    );
  });

  return (
    <div className='max-w-[90%] m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%]'>
      {main}
    </div>
  );
};

const Footer = () => {
  return(
    <div className='pt-16'>
      <p className='border-t-2 border-black'></p>
      <div className='max-w-[75%] m-auto my-5'>
        <span>Created by</span> <a href="https://github.com/krushnarrathod" className='font-semibold'>@KrushnaRrathod</a>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <div className='max-w-[90%] lg:max-w-[75%] m-auto py-9'>
        <Hero/>
      </div>
      <p className='border-b-2 border-black'></p>
      <Title/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home