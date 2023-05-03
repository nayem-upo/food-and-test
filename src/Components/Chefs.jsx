/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { AuthContext } from './AuthProvider';

const Chefs = () => {
    const {ref} = useContext(AuthContext);
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://food-and-test-server-nayem-upo.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div ref={ref}>
            <h1 className='font-bold text-center my-4 text-5xl text-[#60AA2D]'>Meet Our Chefs</h1>
            <h1 className='font-bold text-center my-4 text-2xl text-[#60AA2D]'>We have the most experienced chefs!</h1>
            <hr className="mb-16 w-[550px] mx-auto h-0.5 border-t-0 bg-[#60AA2D] opacity-100 dark:opacity-50" />
            <div className='grid grid-rows-2 grid-flow-col mb-20 justify-evenly gap-10'>

                {
                    chefs.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;