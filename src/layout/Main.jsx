import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../shared/FooterSection';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
          <Header></Header>  
          <Outlet></Outlet>
          <FooterSection></FooterSection>
        </div>
    );
};

export default Main;<Header></Header>