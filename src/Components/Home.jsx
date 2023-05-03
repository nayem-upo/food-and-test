/* eslint-disable no-unused-vars */
import React from 'react';
import MainBanner from './MainBanner';
import Chefs from './Chefs';
import FootBanner from './FootBanner';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Chefs></Chefs>
            <div className="bg-[url('/images/green.png')] py-14 shadow-xl bg-cover text-center">
                <h1 className='text-white font-bold text-5xl'>Have any question to ask? Call us at</h1>
                <h1 className='text-white font-bold mt-2 text-5xl'>888 333 9999</h1>
            </div>
        </div>
    );
};

export default Home;