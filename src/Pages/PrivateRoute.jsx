import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <img src="/src/assets/loading.gif" alt="" />
    }

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