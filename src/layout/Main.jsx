import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import FooterSection from '../shared/FooterSection';
import Header from '../shared/Header';

export const CoursesContext = createContext([])
export const DarkContext = createContext([])

const Main = () => {
  const [darkModeOn, setDrkModeOn] = useState(false)
  const allCourses = useLoaderData();

  return (
    <DarkContext.Provider value={[darkModeOn, setDrkModeOn]}>
      <CoursesContext.Provider value={allCourses}>
        <div className={darkModeOn ? "dark " : ""}>
          <Header></Header>
          <Outlet></Outlet>
          <FooterSection></FooterSection>
        </div>
      </CoursesContext.Provider>
    </DarkContext.Provider>
  );
};

export default Main; <Header></Header>