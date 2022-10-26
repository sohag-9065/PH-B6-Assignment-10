import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { course_id } = useParams();
    const { id, course_name, course_outline, description, img, new_arival, price, Schedule, Starts } = useLoaderData();

    console.log(course_id);
    return (
        <div className="card w-full bg-base-100 shadow-xl pt-4">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-1/2' /></figure>
            <div className="card-body mx-40">
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
                    <Link to='' className="btn btn-outline btn-primary">Download PDF</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;