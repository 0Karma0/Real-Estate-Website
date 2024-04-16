import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={location?.pathname ||
        '/'}/>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;