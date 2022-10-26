import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import FooterSection from '../shared/FooterSection';
import Header from '../shared/Header';

export const CoursesContext = createContext([])

const Main = () => {
  const allCourses = useLoaderData();

  return (
    <CoursesContext.Provider value={allCourses}>
      <Header></Header>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </CoursesContext.Provider>
  );
};

export default Main; <Header></Header>