import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetail = () => {
    const { id, course_name, course_outline, description, img, new_arival, price, Schedule, Starts } = useLoaderData();
    const ref = React.createRef();

    return (
        <div>
            <div className="card max-w-2xl mx-auto bg-base-100 mb-4 shadow-xl pt-4 dark:bg-gray-800 dark:text-gray-100">
                <div ref={ref}>
                    <figure><img src={img} alt="Shoes" className='w-full ' /></figure>
                    <div className="card-body text-black ">
                        <div className="">
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
                                    course_outline.map((co, index) => <li key={index} className='ml-8'>* {co}</li>)
                                }
                            </ul>
                            <p ><span className='text-xl font-semibold text-secondary'>Price: {price}</span> TK.</p>
                            <p className='text-xl font-semibold text-secondary'>Schedule: </p>
                            <p className='text-xm ml-8'>* {Schedule}</p>
                            <p className='text-xm ml-8'>* {Starts}</p>
                        </div>

                    </div>
                </div>
                <div className="card-actions justify-start my-4 pl-6">
                    <Link to={`/primium/${id}`} className="btn btn-outline btn-primary">Get premium access</Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-info">Download PDF</button>}
                    </Pdf>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;