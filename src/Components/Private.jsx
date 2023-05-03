import React from 'react';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()

    if (loading) {
        return <div className='h-[600px] flex mb-96 bg-white justify-center'>
            <progress className="progress md:w-[600px] w-[80%] my-auto"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default Private;