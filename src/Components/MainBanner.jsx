/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { faAppleWhole, faCakeCandles, faCarrot, faDrumstickBite, faFishFins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const MainBanner = () => {
    const { handleScroll } = useContext(AuthContext)
    return (
        <div>

            <div className="bg-[url('/images/design.png')] py-24 bg-cover text-center">
                <p className='text-orange-500 text-xl'>Do you like cooking?</p>
                <h1 className='text-white text-6xl font-bold'>Welcome to</h1>
                <h1 className='text-white text-6xl font-bold'>Food & Test Community</h1>
                <hr className="my-8 h-0.5 border-t-0 w-[800px] mx-auto bg-neutral-100 opacity-100 dark:opacity-50" />
                <div className='flex justify-center gap-5 my-4'>
                    <div className='bg-[#A1CD44] border-double border-4 border-[#60AA2D] rounded-md text-white hover:text-[#4E4E4E]'>
                        <FontAwesomeIcon className='text-6xl py-2 px-7' icon={faCakeCandles} />
                        <p className='font-semibold'>Cake</p>
                    </div>
                    <div className='bg-[#A1CD44] border-double border-4 border-[#60AA2D] rounded-md text-white hover:text-[#4E4E4E]'>
                        <FontAwesomeIcon className='text-6xl py-2 px-7 ' icon={faFishFins} />
                        <p className='font-semibold'>Fish</p>
                    </div>
                    <div className='bg-[#A1CD44] border-double border-4 border-[#60AA2D] rounded-md text-white hover:text-[#4E4E4E]'>
                        <FontAwesomeIcon className='text-6xl py-2 px-7 ' icon={faDrumstickBite} />
                        <p className='font-semibold'>Chicken</p>
                    </div>
                    <div className='bg-[#A1CD44] border-double border-4 border-[#60AA2D] rounded-md text-white hover:text-[#4E4E4E]'>
                        <FontAwesomeIcon className='text-6xl py-2 px-7 ' icon={faAppleWhole} />
                        <p className='font-semibold'>Fruit</p>
                    </div>
                    <div className='bg-[#A1CD44] border-double border-4 border-[#60AA2D] rounded-md text-white hover:text-[#4E4E4E]'>
                        <FontAwesomeIcon className='text-6xl py-2 px-7 ' icon={faCarrot} />
                        <p className='font-semibold'>Vegetables</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-12 my-20'>
                <div>
                    <img className='w-[515px]' src="/images/collage.png" alt="" />
                </div>
                <div className='w-[400px]'>
                    <p className='text-orange-500 font-semibold text-lg'>Thatix Introduction</p>
                    <h1 className='text-5xl font-bold'>Give yourself a lifetime of cooking confidence</h1>
                    <p className='my-5 font-semibold'>Cooking can be an intimidating task for many people, but it doesn't have to be. With the right mindset, tools, and knowledge, anyone can become a confident and skilled cook. The key is to approach cooking as a lifelong journey of learning and experimentation, rather than a daunting task to be mastered overnight.</p>
                    <button onClick={handleScroll} className='bg-[#60AA2D] hover:bg-[#3b7b10] btn border-none text-white rounded'>Meet Chefs</button>
                </div>
            </div>



        </div>
    );
};

export default MainBanner;