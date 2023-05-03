/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ChefDetails = () => {
    const [detail, setDetail] = useState({})
    const { picture, name, bio, years_of_experience, recipes, recipes_count, likes } = detail;
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://food-and-test-server-nayem-upo.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    return (
        <div>
            <div className="hero py-20 bg-[#F7F7F7]">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-96'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className='font-bold'> <span className='text-[#60AA2D] font-extrabold'>{years_of_experience}</span> years of experience</p>
                        <p className="py-6">{bio}</p>
                        <div className='flex justify-between'>
                            <p className=''><FontAwesomeIcon className='text-[#60AA2D]' icon={faPlateWheat} /> Recipes: <span className='text-[#60AA2D] font-semibold'>{recipes_count}</span></p>
                            <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                            <p className=''><FontAwesomeIcon className='text-[#60AA2D]' icon={faThumbsUp} /> Likes: <span className='text-[#60AA2D] font-semibold'>{likes}</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <h1 className='font-bold text-center my-4 mt-10 text-5xl text-[#60AA2D]'>Cook yourself</h1>
            <h1 className='font-bold text-center my-4 text-2xl text-[#60AA2D]'>3 most popular recipes of the chef</h1>
            <hr className="mb-16 w-[550px] mx-auto h-0.5 border-t-0 bg-[#60AA2D] opacity-100 dark:opacity-50" />

            <div className='flex justify-evenly'>
                {
                    recipes?.map(recipe => <Recipes recipe={recipe} key={recipe.name}></Recipes>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;