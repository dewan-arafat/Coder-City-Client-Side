import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSideNav from './LeftSideNav';
import CourseHome from './CourseDeatils';

const Courses = () => {

    return (
        <div className='lg:flex flex-row px-6 pt-32'>

            <LeftSideNav ></LeftSideNav>

            <Outlet></Outlet>



        </div>
    );
};

export default Courses;