import React from 'react';
import ThemeToggle from '../theme/ThemeToggle';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            
            <ThemeToggle></ThemeToggle>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;