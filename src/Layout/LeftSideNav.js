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
        <div className='w-3/12'>
            <h4>All Category: {courseName.length}</h4>
            <div>
                {
                    courseName.map(category => <p key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;