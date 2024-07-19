import React from 'react';
import ImagePreview from './Preview';
import { gradient, marvel, nature, art, waves, warp, mountain, scifi, dark, oilrig, god } from '../../index.js';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';

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

const Preview = () => {
  const { previewNo } = useParams();

  let preview;
  let link;

  if (previewNo === "gradient") {
    preview = gradient;
    link = 'https://drive.google.com/file/d/1y_PyfNBc7JojE_fWxRhhA-ngTRuGCHXA/view?usp=drive_link';
  } else if (previewNo === "marvel") {
    preview = marvel;
    link = 'https://drive.google.com/file/d/1Dq6_0m1TkcInyWyDFB-cYMbDLTofi6Eh/view?usp=drive_link';
  } else if (previewNo === "nature") {
    preview = nature;
    link = 'https://drive.google.com/file/d/12HkbqKm1oE6TpJ6YJzZzclkvOkfOSjeE/view?usp=drive_link';
  } else if (previewNo === "art") {
    preview = art;
    link = 'https://drive.google.com/file/d/1XEXW4V-X8p6M8ou1-R8XzDtodsZOoyio/view?usp=drive_link';
  } else if (previewNo === "waves") {
    preview = waves;
    link = 'https://drive.google.com/file/d/1W7HdM446kLQukDLMTjlxF_L88GlCvKK9/view?usp=drive_link';
  } else if (previewNo === "warp") {
    preview = warp;
    link = 'https://drive.google.com/file/d/1eocREFPeYJr4wJ5QWrgtf4LX3SXQwkaK/view?usp=drive_link';
  } else if (previewNo === "mountain") {
    preview = mountain;
    link = "https://drive.google.com/file/d/11WcsPfJ9cB7MPkUBkfglfqGgOyvKb1th/view?usp=drive_link";
  } else if (previewNo === "sci-fi") {
    preview = scifi;
    link = "https://drive.google.com/file/d/1qM-aGgBV2rCVBNzjg6Sb6nTrMIuXugyM/view?usp=drive_link";
  } else if (previewNo === "dark") {
    preview = dark;
    link = "https://drive.google.com/file/d/1jpIoQRpPLy2OTrHTxwkwSIjp77MKVLSB/view?usp=drive_link";
  } else if (previewNo === "oil-rig") {
    preview = oilrig;
    link = "https://drive.google.com/file/d/1jCMB6hveL7kZhky1ZNvLG2uwCX-igw4C/view?usp=drive_link";
  } else if (previewNo === "god") {
    preview = god;
    link = "https://drive.google.com/file/d/1rSaXv7iNmb1HaGw-2_cEMNMKlkXbLMjU/view?usp=drive_link"
  }

  return (
    <>
      <div className="border-2 border-black max-w-[90%] lg:max-w-[75%] mx-auto mt-12 rounded-xl">
        <div className='mb-12'>
          <ImagePreview data={preview} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link to="/">
            <p className="border-b-2 border-t-2 border-black py-5 flex justify-center text-2xl">{previewNo.toUpperCase()}</p>
            <div className="flex justify-center items-center gap-4 border-black py-5">
              <img src="/nav-image.jpg" alt="Nav image" className="max-w-[40px] rounded-full" />
              <p className="text-xl md:text-lg">Krushna / UltraWall</p>
            </div>
          </Link>
          <div className="border-t-2 border-black lg:border-l-2 flex items-center justify-center">
            <Button className="bg-blue-700 py-6 px-6 my-5 text-xl md:text-lg" asChild>
              <a href={link} target='_blank' rel='noopener noreferrer'>Download Zip File</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Preview;
