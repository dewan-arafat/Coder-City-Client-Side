import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, img, } = course;
    return (
        <div>

            <div className='bg-gray-200 p-6 rounded shadow-lg'>
                <img
                    className='object-fit w-full h-96 mb-6 rounded shadow-lg md:h-3/4 lg:h-80 xl:h-80'
                    src={img}
                    alt=''
                />
                <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
                <Link to={`/courses/${id}`}
                    //onClick={() => handleAddToCart(product)}
                    className='px-8 block w-full mt-4 py-3 font-semibold text-center rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    View Details
                </Link>
            </div>

        </div>
    );
};

export default CourseCard;