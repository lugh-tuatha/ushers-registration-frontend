import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { ClerkProvider } from '@clerk/clerk-react'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.tsx'
import SignIn from './pages/sign-in/[[...index]].tsx'
import Dashboard from './pages/dashboard/index.tsx';
import Regular from './pages/guest/_page/regular/index.tsx';
import Vip from './pages/guest/_page/vip/index.tsx';
import Profile from './pages/guest/_page/profile/index.tsx';
import Reports from './pages/reports';
import WeeklyAttendaceSummary from './pages/reports/_page/weekly-attendance-summary/index.tsx';
import Summary from './pages/summary/index.tsx';
import SundayAttendance from './pages/attendance/index.tsx';
import UpcomingEvents from './pages/upcoming-events/index.tsx';
import CheckIn from './pages/check-in/index.tsx';
import QRCheckIn from './pages/check-in/_page/qr-check-in.tsx';
import ProtectedRoute from './components/routing/protected-route';
import Leaders from './pages/maintenance/leaders/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/guest/regular/",
        element: (
            <ProtectedRoute>
                <Regular />
            </ProtectedRoute>
        ),
    },
    {
        path: "/guest/regular/:slug",
        element: <Profile />,
    },
    {
        path: "/guest/vip",
        element: (
            <ProtectedRoute>
                <Vip />
            </ProtectedRoute>
        ),
    },
    {
        path: "/check-in",
        element: (
            <ProtectedRoute>
                <CheckIn />
            </ProtectedRoute>
        ),
    },
    {
        path: "/check-in/:id",
        element: <QRCheckIn />,
    },
    {
        path: "attendance/:type",
        element: (
            <ProtectedRoute>
                <SundayAttendance />
            </ProtectedRoute>
        ),
    },
    {
        path: "/upcoming-events",
        element: <UpcomingEvents />,
    },
    {
        path: "/summary",
        element: (
            <ProtectedRoute>
                <Summary />
            </ProtectedRoute>
        ),
    },
    {
        path: "/reports",
        element: (
            <ProtectedRoute>
                <Reports />
            </ProtectedRoute>
        ),
    },
    {
        path: "/reports/weekly-attendance-summary",
        element: (
            <ProtectedRoute>
                <WeeklyAttendaceSummary />
            </ProtectedRoute>
        ),
    },
    {
        path: "/maintenance/leaders",
        element: (
            <ProtectedRoute>
                <Leaders />
            </ProtectedRoute>
        ),
    },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
                    <RouterProvider router={router} />
                    {/* <ReactQueryDevtools /> */}
                </ClerkProvider>
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>,
)
