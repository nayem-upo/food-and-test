/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faPlateWheat, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { picture, name, years_of_experience, recipes_count, likes, id } = chef;
    const navigate = useNavigate()
    return (
        <div className='shadow-2xl border w-80 md:w-72 border-[#60AA2D] my-4'>
            <div>
                <LazyLoad once height={200} offset={100}>
                    <img src={picture} className=' md:w-72 md:h-52 object-cover' alt="" />
                </LazyLoad>

            </div>
            <h1 className='text-xl font-semibold m-3'>{name}</h1>
            <p className='ms-3 font-semibold'>Experience: {years_of_experience} years</p>
            <hr className="mb-0 mt-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            
            <button onClick={() => navigate(`/details/${id}`)} className='w-full bg-[#60AA2D] bottom-0 py-2 hover:bg-[#3b7b10] text-white font-semibold'>View Recipes</button>
        </div>
    );
};

export default ChefCard;