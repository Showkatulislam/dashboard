import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='h-full'>
           <div className='h-full flex flex-col w-60 fixed inset-y-0'>
                <Sidebar/>
           </div>
           <main className='pl-80 h-full'>
           {children}
           </main>
        </div>
    );
};

export default layout;