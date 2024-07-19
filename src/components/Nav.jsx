import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src="/nav-image.jpg" alt="Nav image" className="max-w-[40px] rounded-full" />
      <p className='text-xl'>Krushna / UltraWall</p>
    </div>
  );
};

const SubscribeForm = () => {
  return (
    <div className="flex gap-3">
      <Input className="max-w-[600px]" type="email" placeholder="Your Email Address" aria-label="Email Address"/>
      <Button variant="outline" >Subscribe</Button>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
        <Link to="/">
            <div className="flex flex-col gap-4 justify-between py-7 max-w-[75%] m-auto lg:flex-row">
                <Logo />
                <SubscribeForm />
            </div>  
        </Link>
        <p className='border-b-2 border-black'></p>
    </div>
  );
};

export default Nav;
