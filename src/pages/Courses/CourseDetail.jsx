import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const { id, course_name, course_outline, description, img, new_arival, price, Schedule, Starts } = useLoaderData();

    return (
        <div className="card w-full bg-base-100 shadow-xl pt-4 dark:bg-gray-800 dark:text-gray-100">
            <figure><img src={img} alt="Shoes" className='w-full md:w-1/2' /></figure>
            <div className="card-body   lg:mx-40">
                <h2 className="card-title">
                    <span className='text-primary text-4xl'>{course_name}</span>
                    {
                        new_arival && <div className="badge badge-secondary">NEW</div>
                    }
                </h2>
                <p>{description}</p>
                <p className='text-xl font-semibold text-secondary'>Course Outline</p>
                <ul>
                    {
                        course_outline.map( (co, index) => <li key={index} className='ml-8'>* {co}</li>)
                    }
                </ul>
                <p ><span className='text-xl font-semibold text-secondary'>Price: {price}</span> TK.</p>
                <p className='text-xl font-semibold text-secondary'>Schedule: </p>
                <p className='text-xm ml-8'>* {Schedule}</p>
                <p className='text-xm ml-8'>* {Starts}</p>
                <div className="card-actions justify-start mt-4">

                    <Link to={`/primium/${id}`} className="btn btn-outline btn-primary">Get premium access</Link>
                    <Link to='' className="btn btn-outline btn-info">Download PDF</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;