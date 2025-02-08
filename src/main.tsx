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
import WeeklyAttendanceSummary from './pages/reports/_page/weekly-attendance-summary/index.tsx';
import LeadersAttendanceSummary from "./pages/reports/_page/leaders-attendance-summary";
import LeaderMemberList from "./pages/reports/_page/leader-member-list";
import SundayAttendance from './pages/attendance/index.tsx';
import UpcomingEvents from './pages/upcoming-events/index.tsx';
import CheckIn from './pages/check-in/index.tsx';
import QRCheckIn from './pages/check-in/_page/qr-check-in.tsx';
import ProtectedRoute from './components/routing/protected-route';

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
                <WeeklyAttendanceSummary />
            </ProtectedRoute>
        ),
    },
    {
        path: "/reports/leaders-attendance-summary",
        element: (
            <ProtectedRoute>
                <LeadersAttendanceSummary />
            </ProtectedRoute>
        )
    },
    {
        path: "/reports/leader-member-list",
        element: (
            <ProtectedRoute>
                <LeaderMemberList />
            </ProtectedRoute>
        )
    }
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
