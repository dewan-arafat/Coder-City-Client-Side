import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const AllCourse = () => {
    const courseTopic = useLoaderData();
    console.log(courseTopic);
    return (
        <div className='w-9/12'>
            this is another div
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
                {courseTopic.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                    //handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>


        </div>
    );
};

export default AllCourse;