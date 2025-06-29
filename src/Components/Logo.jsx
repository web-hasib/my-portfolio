import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/' onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }} className='flex justify-center items-center gap-2'>
            <img className='w-6 md:w-8 lg:w-10 ' src="/logo.png" alt="" />
            <h1 className='font-secondary font-thin text-xl md:text-2xl lg:text-3xl text-white/80'>Hasibul </h1>
        </Link>
    );
};

export default Logo;