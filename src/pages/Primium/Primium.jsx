import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Primium = () => {
    const { id, course_name, course_outline, description, img, new_arival, price, Schedule, Starts } = useLoaderData();

    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">{course_name}</h1>
                    
                    <p className="mb-5"><span className='text-xl font-semibold text-secondary'>Price: {price}</span> TK.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Primium;