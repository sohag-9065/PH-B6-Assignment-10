import React, { useContext } from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { CoursesContext } from '../../layout/Main';
import CourseCard from '../Courses/CourseCard';

const CoursesHome = () => {
    const { allCourses } = useContext(CoursesContext);
    return (
        <div className='py-16 dark:bg-gray-800 dark:text-gray-100'>
                <h1 className='text-4xl text-center text-lime-500 mb-12 font-semibold'>Courses</h1>
                <div className='bg-rose-100 dark:bg-gray-800 dark:text-gray-100 mx-4 lg:mx-12 py-12 px-2 lg:px-10 rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-2 lg:gap-10 justify-items-center '>
                        {
                            allCourses.slice(0, 3).map((course, index) => <CourseCard
                                key={index}
                                course={course}
                            >
                            </CourseCard>)
                        }
                    </div>
                    <div className='text-center mt-12'>
                        <Link to='/courses'  ><Button color="accent">All Couses</Button> </Link>
                    </div>
                </div>

            </div>
    );
};

export default CoursesHome;