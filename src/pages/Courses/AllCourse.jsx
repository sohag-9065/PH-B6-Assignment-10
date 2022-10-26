import React, { useContext } from 'react';
import { CoursesContext } from '../../layout/Main';
import CourseCard from './CourseCard';

const AllCourse = () => {
    const { allCourses } = useContext(CoursesContext);
    return (
        <div className='mb-16 bg-rose-100'>
            <h1 className='text-4xl text-center text-lime-500 pt-12 font-semibold'>All Courses</h1>
            <div className=' py-12 px-2  rounded-2xl'>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 lg:gap-10 justify-center items-center justify-items-center mx-auto '>
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

    );
};

export default AllCourse;