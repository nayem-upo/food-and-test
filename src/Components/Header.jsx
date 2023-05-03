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
    console.log(displayName, photoURL);

    const logOutUser = () => {
        logOut(),
            navigate("/")
    }

    return (
        <div>
            <div className="navbar bg-[#191f1325] flex items-center md:gap-20 justify-evenly">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Food & Test</Link>
                </div>

                <div className='flex justify-evenly items-center gap-20'>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold"} to="/blog">Blog</NavLink>
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
                                <li className='p-3 bg-slate-100 text-[#60AA2D] font-semibold'>Name</li>
                                <hr />
                                <li onClick={logOutUser} className='p-3 cursor-pointer text-red-600 font-bold bg-slate-100'>Logout</li>
                            </ul>
                        </div>
                    </div>
                }

                {
                    !user && <Link to="/login"><button className='btn bg-[#60AA2D] border-none text-white rounded hover:bg-[#3b7b10]'>Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;