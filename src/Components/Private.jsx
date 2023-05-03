/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()

    if (loading) {
        return <div className='text-center my-[200px]'>
            <progress className="progress w-[50%]"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default Private;