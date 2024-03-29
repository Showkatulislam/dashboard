import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.jpg'
const page = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col items-center'>
            <Image src={logo} alt='logo'/>
            <h1 className='mt-5 text-7xl text-indigo-600 font-bold'>Welcome Finance Go</h1>
            </div>
        </div>
    );
};

export default page;