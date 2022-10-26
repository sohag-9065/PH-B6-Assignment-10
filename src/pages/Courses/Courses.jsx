import React from 'react';
import { useContext } from 'react';
import { CoursesContext } from '../../layout/Main';
import BannerCourses from './BannerCourses';
import CourseCard from './CourseCard';

const Courses = () => {
    const { allCourses } = useContext(CoursesContext);
    console.log(allCourses);
    return (
        <div>
            <BannerCourses></BannerCourses>
            <div className='mb-16'>
                <h1 className='text-4xl text-center text-lime-500 my-12 font-semibold'>All Courses</h1>
                <div className='bg-rose-100 mx-4 lg:mx-12 py-12 px-2 lg:px-10 rounded-2xl'>
                    <div className='grid grid-cols-1 lg:grid-cols-3  gap-2 lg:gap-10 '>
                        {
                            allCourses.map((course, index) => <CourseCard
                                key={index}
                                course={course}
                            >
                            </CourseCard>)
                        }
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Courses;