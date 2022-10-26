import React from 'react';

const CourseCard = ({course}) => {
    const {course_name, new_arival, description, price,  Starts } = course;
    console.log(course);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
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
                <button className="btn btn-outline btn-success">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;