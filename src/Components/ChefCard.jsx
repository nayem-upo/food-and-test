/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faPlateWheat, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { picture, name, years_of_experience, recipes_count, likes, id } = chef;
    const navigate = useNavigate()
    return (
        <div className='shadow-2xl border border-[#60AA2D] my-4'>
            <div><img src={picture} className=' w-72 h-52 object-cover' alt="" /></div>
            <h1 className='text-xl font-semibold m-3'>{name}</h1>
            <p className='ms-3 font-semibold'>Experience: {years_of_experience} years</p>
            <hr className="mb-0 mt-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className='flex justify-evenly'>
                <p className='p-2'><FontAwesomeIcon className='text-[#60AA2D]' icon={faPlateWheat} /> Recipes: <span className='text-[#60AA2D] font-semibold'>{recipes_count}</span></p>
                <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                <p className='p-2'><FontAwesomeIcon className='text-[#60AA2D]' icon={faThumbsUp} /> Likes: <span className='text-[#60AA2D] font-semibold'>{likes}</span></p>
            </div>
            <button onClick={()=> navigate(`/details/${id}`)} className='w-full bg-[#60AA2D] bottom-0 py-2 hover:bg-[#3b7b10] text-white font-semibold'>View Recipes</button>
        </div>
    );
};

export default ChefCard;