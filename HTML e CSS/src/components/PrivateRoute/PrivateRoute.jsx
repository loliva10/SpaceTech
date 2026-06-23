import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, permitido }) {
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    if (!tipoUsuario) {
        return <Navigate to="/" replace />;
    }

    if (tipoUsuario !== permitido) {
        return <Navigate to="/" replace />;
    }

    return children;
}