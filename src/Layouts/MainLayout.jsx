import React from 'react';

import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='relative '>
            <header className='pt-5 sticky z-10 top-0'>

            <NavBar></NavBar>
            </header>
           
           <section className='max-w-7xl mx-auto'>

            <Outlet></Outlet>
           </section>
           <footer className='max-w-7xl mx-auto'>

           <Footer/>
           </footer>
        </div>
    );
};

export default MainLayout;