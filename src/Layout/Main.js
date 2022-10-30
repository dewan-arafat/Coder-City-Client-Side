import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Navbar from './Navbar';
const Main = () => {
    return (
        <div className='realtive'>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;