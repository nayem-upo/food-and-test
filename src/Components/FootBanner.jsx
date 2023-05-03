/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const FootBanner = () => {
    const { handleScroll } = useContext(AuthContext)
    return (
        <div>
            <div className="hero py-20 bg-[#F7F7F7]">
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                    <img src="/images/chefs/plate.png" className="max-w-sm " />
                    <div>
                        <p className='font-bold'>It's all about good</p>
                        <h1 className="text-5xl font-bold">Good Food & Test!</h1>
                        <p className="py-6 w-96">Teriyaki chicken is a popular dish that is made by grilling or pan-frying chicken that has been marinated in a teriyaki sauce, typically made with soy sauce, sake, mirin, sugar, and ginger. </p>
                        <button onClick={handleScroll} className='bg-[#60AA2D] hover:bg-[#3b7b10] btn border-none text-white rounded'>Meet Chefs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootBanner;