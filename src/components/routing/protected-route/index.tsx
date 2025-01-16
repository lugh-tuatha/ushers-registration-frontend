import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"
import AuthCheck from "../../common/auth-check";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isLoaded, isSignedIn } = useAuth();
    const location = useLocation();

    // Wait for auth state to load
    if (!isLoaded) {
        return <AuthCheck />;
    }

    // Redirect if not signed in
    if (!isSignedIn) {
        return <Navigate to="/sign-in" state={{ from: location }} />;
    }

    return children
}
