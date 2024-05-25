import {Navigate, Outlet} from "react-router-dom";
import React from "react";
import {useAuth} from "../Providers/AuthProvider";

const PrivateRoute = ({
                          redirectPath = '/login'
                      }) => {
    const auth = useAuth();
    if (!auth.token) {
        return <Navigate to={redirectPath} replace/>;
    }


    return <Outlet/>;
};

export default PrivateRoute;