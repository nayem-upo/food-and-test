/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { faUser } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [user] = useState(null)
    return (
        <div>
            <div className="navbar bg-[#191f1325] flex items-center md:gap-20 justify-evenly">
                <div className="flex-1">
                    <Link  className="btn btn-ghost normal-case text-xl" to="/">Food & Test</Link>
                </div>

                <div className='flex justify-evenly items-center gap-20'>
                    <NavLink to="/" className="font-bold">Home</NavLink>
                    <NavLink className="font-bold">Blog</NavLink>
                </div>
                {
                    user && <div className="flex-none">
                        <div className="dropdown dropdown-end dropdown-hover">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full mt-4">

                                    {/* {
                                    user && <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                }
                                {
                                    !user && <FontAwesomeIcon icon={faUser} />
                                } */}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#191f1325] rounded-box w-52">
                                <li>Name</li>
                                <li>Logout</li>
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