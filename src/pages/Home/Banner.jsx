import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-200 dark:bg-gray-800 dark:text-gray-100" style={{ backgroundImage: `url("https://i.ibb.co/GFkbzQV/banner-about-programming-coding-course-260nw-1887006397.png")` ,  }}>
            <div className="hero-content text-center">
                <div className="max-w-lg ">
                    <h1 className="text-5xl font-bold text-white">Welcome To Fun Code</h1>
                     
                </div>
            </div>
        </div>
    );
};

export default Banner;