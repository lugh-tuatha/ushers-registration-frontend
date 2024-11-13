import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App.tsx'
import Regular from './pages/regular/index.tsx';
import Vip from './pages/vip/index.tsx';
import AdminLogin from './pages/admin-login/index.tsx';
import Profile from './pages/regular/_pages/profile.tsx';
import Reports from './pages/reports/index.tsx';
import Summary from './pages/summary/index.tsx';
import SundayAttendance from './pages/attendance/_pages/sunday.tsx';
import PrayerNightAttendance from './pages/attendance/_pages/prayer-night.tsx';
import UpcomingEvents from './pages/upcoming-events/index.tsx';
import CheckIn from './pages/check-in/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/regular/",
        element: <Regular />,
    },
    {
        path: "/regular/:slug",
        element: <Profile />
    },
    {
        path: "/vip",
        element: <Vip />,
    },
    {
        path: "/check-in",
        element: <CheckIn />,
    },
    {
        path: "attendance/sunday",
        element: <SundayAttendance />
    },
    {
        path: "attendance/prayer-night",
        element: <PrayerNightAttendance />
    },
    {
        path: "/login",
        element: <AdminLogin />,
    },
    {
        path: "/upcoming-events",
        element: <UpcomingEvents />
    },
    {
        path: "/summary",
        element: <Summary />
    },
    {
        path: "/reports",
        element: <Reports />,
    },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router} />
                {/* <ReactQueryDevtools /> */}
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>,
)
