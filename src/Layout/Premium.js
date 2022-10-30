import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Premium = () => {
    const news = useLoaderData();
    const { name, img, class_, duration, price } = news;
    return (
        <div className='mx-auto'>
            <div className='bg-gray-200 p-6 rounded shadow-lg'>
                <img
                    className='object-fit w-full h-96 mb-6 rounded shadow-lg md:h-3/4 lg:h-80 xl:h-80'
                    src={img}
                    alt=''
                />
                <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
                <p> <span className='font-bold'>Number of Classes:</span>  {class_} </p>
                <p className='w-52'><span className='font-bold'>Course Duration:</span>  {duration} Hours</p>
                <p className='w-52'><span className='font-bold'>Course Price:</span>  {price}</p>
                <Link
                    className='px-8 block w-full mt-4 py-3 font-semibold text-center rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    Pay Now
                </Link>
            </div>
        </div>
    );
};

export default Premium;