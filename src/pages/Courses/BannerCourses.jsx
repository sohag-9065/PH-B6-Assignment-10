import React from 'react';

const BannerCourses = () => {
    return (
        <div className="p-6 py-12 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">

                    <div className="space-y-2  py-2 lg:py-0">
                        <h2 className="text-5xl tracking-tighter font-bold">LEARN FROM PROFESSIONALS</h2>
                        <p>Online courses are planned by industry professionals to make sure that you have the knowledge to build professional software</p>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BannerCourses;