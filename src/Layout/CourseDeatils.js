import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDeatils = () => {
    const news = useLoaderData();
    const { id, name, img, class_, caption } = news;
    console.log(news);
    return (
        <div className='mx-auto mb-6'>
            <Pdf targetRef={ref} filename={name}>
                {({ toPdf }) => <button onClick={toPdf} className="btn flex mx-auto mb-6">Generate Pdf</button>}
            </Pdf>
            <div className='bg-gray-200 p-6 rounded shadow-lg'>
                <img
                    className='object-fit w-full h-96 mb-6 rounded shadow-lg md:h-3/4 lg:h-80 xl:h-80'
                    src={img}
                    alt=''
                />
                <div ref={ref}><p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
                    <p> <span className='font-bold'>Number of Classes:</span>  {class_} </p>
                    <p className='w-52'><span className='font-bold'>Course Outline:</span>  {caption}</p></div>

                <Link to={`/courses/premium/${id}`}
                    className='px-8 block w-full mt-4 py-3 font-semibold text-center rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    Get Premium Access
                </Link>
            </div>
        </div>
    );
};

export default CourseDeatils;