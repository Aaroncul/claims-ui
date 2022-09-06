import { useSelector } from "react-redux";
import { Route, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {

    const role = useSelector(state => state.user.role);
    const allowedRoles = props.roles;
    const location = useLocation();
    
    let result;
    if (allowedRoles.includes(role)) {
        result = props.component;
    }  else if (role === "") {
        result = <Navigate to={"/login?target=" + location.pathname} />
    }
    else {
        result = <p>Sorry you are not permitted to access this function</p>
    }


    return (result);

}

export default ProtectedRoute;