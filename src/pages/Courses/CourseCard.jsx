import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, course_name, img, new_arival, description, price, Starts } = course;
    return (
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl text-black">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {course_name}
                    {
                        new_arival && <div className="badge badge-secondary">NEW</div>
                    }

                </h2>
                <p>{description.slice(0, 100)}...</p>
                <p className='font-semibold text-pink-500'>TK. {price}</p>
                <div>
                    <h1 className='font-bold'>Starts:</h1>
                    <p className='text-xm'>{Starts}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/courses/course-detail/${id}`} className="btn btn-outline btn-primary">See Details</Link>
                     
                </div>
            </div>
        </div>
    );
};

export default CourseCard;