import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courseName, setCourseName] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-name')
            .then(res => res.json())
            .then(data => setCourseName(data));
    }, [])
    return (
        <div className='w-full lg:w-3/12'>
            <h4 className='text-green-600 text-2xl font-bold text-center'>All Courses</h4>
            <div className='pt-6'>
                {
                    courseName.map(category => <p key={category.id}>
                        <Link className='px-8 block w-full mt-4 py-3 font-semibold text-center rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400' to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;