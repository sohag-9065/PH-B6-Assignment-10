import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import CoursesHome from './CoursesHome';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <CoursesHome></CoursesHome>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;