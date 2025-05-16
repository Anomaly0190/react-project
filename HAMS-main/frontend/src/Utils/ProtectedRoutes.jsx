import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
const ProtectedRoutes=({children})=>{
    const {user}=useAuth();

    return user?children:<Navigate to="/login" replace />
};

export default ProtectedRoutes