/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { faUser } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const logOutUser = () => {
        logOut();
        navigate("/")
    }

    return (
        <div className='sticky top-0 z-40 shadow-xl'>
            <div className="navbar sticky bg-[#EEFDDF] flex items-center md:gap-20 justify-evenly">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Food & Test</Link>
                </div>

                <div className='flex justify-center items-center gap-10 md:gap-20 me-6 md:me-0'>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold hover:text-[#60AA2D]"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold hover:text-[#60AA2D]"} to="/blog">Blog</NavLink>
                </div>
                {
                    user && <div className="flex-none">
                        <div className="dropdown dropdown-end dropdown-hover">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">

                                    {
                                        photoURL && <img src={photoURL} />
                                    }
                                    {
                                        !photoURL && <FontAwesomeIcon className='mt-3' icon={faUser} />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-[#191f1325] rounded-box w-52">
                                <li className=' bg-slate-100 text-[#60AA2D] justify-between  hover:bg-slate-300'>
                                    <Link to="/edit" className="justify-between pt-3">
                                        <span className=' font-bold text-base'>{displayName}</span>
                                        <span className="badge bg-[#60AA2D] text-white border-none">Edit</span>
                                    </Link>
                                </li>
                                <hr />
                                <li onClick={logOutUser} className='p-3 hover:bg-slate-300 cursor-pointer text-red-600 font-bold bg-slate-100'>Logout</li>
                            </ul>
                        </div>
                    </div>
                }

                {
                    !user && <Link to="/login"><button className='btn bg-[#60AA2D] border-none text-white rounded hover:bg-[#3b7b10]'>Login</button></Link>
                }

            </div>
            <hr className="h-1 border-t-0 mx-auto bg-[#A1CD44] opacity-100 " />
        </div>
    );
};

export default Header;