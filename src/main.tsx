import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App.tsx'
import Regular from './pages/guest/regular/index.tsx';
import Vip from './pages/guest/vip/index.tsx';
import AdminLogin from './pages/admin-login/index.tsx';
import Profile from './pages/guest/regular/_pages/profile.tsx';
import Reports from './pages/reports/index.tsx';
import Summary from './pages/summary/index.tsx';
import SundayAttendance from './pages/attendance/index.tsx';
import UpcomingEvents from './pages/upcoming-events/index.tsx';
import CheckIn from './pages/check-in/index.tsx';
import QRCheckIn from './pages/check-in/_page/qr-check-in.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/guest/regular/",
        element: <Regular />,
    },
    {
        path: "/guest/regular/:slug",
        element: <Profile />
    },
    {
        path: "/guest/vip",
        element: <Vip />,
    },
    {
        path: "/check-in",
        element: <CheckIn />,
    },
    {
        path: "/check-in/:id",
        element: <QRCheckIn />,
    },
    {
        path: "attendance/:type",
        element: <SundayAttendance />
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
