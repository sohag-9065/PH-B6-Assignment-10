import React from 'react';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CoursesContext } from '../../layout/Main';
import BannerCourses from './BannerCourses';
import CourseCard from './CourseCard';

const Courses = () => {
    const { allCourses } = useContext(CoursesContext);

    // const {id} = allCourses;
    // console.log(allCourses);
    return (
        <div className='mb-20 scroll-smooth'>
            <BannerCourses></BannerCourses>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">All Courses</label>
                    {/* <h2 className='text-3xl text-orange-300'>Dashboard</h2> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-slate-400 text-base-content space-y-4 ">
                        {
                            allCourses.map((course, index)=><li key={index}><NavLink to={`course-detail/${course.id}`} className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>{course.course_name}</NavLink></li>)
                            
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Courses;