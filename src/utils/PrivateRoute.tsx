import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    //FILL HERE 3.6 אני עוד באמצע!!!
    const floors = useSelector((state: {
        floorAccess: {
            floorAccess: [boolean, boolean, boolean, boolean, boolean, boolean];
        }
    }))
    const { index } = useParams();
    <Outlet/>
: <Navigate to="/login"  state={{ from: location}} replace/>
};

export default PrivateRoute