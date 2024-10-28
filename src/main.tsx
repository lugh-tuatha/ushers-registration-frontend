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
import Attendees from './pages/attendees/index.tsx';
import SpecialMention from './pages/special-mention/index.tsx';
import Attendance from './pages/attendance/index.tsx';
import AdminLogin from './pages/admin-login/index.tsx';
import Attendee from './pages/attendee/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/attendees",
        element: <Attendees />,
    },
    {
        path: "/special-mention",
        element: <SpecialMention />,
    },
    {
        path: "/attendance",
        element: <Attendance />,
    },
    {
        path: "/login",
        element: <AdminLogin />,
    },
    {
        path: "/attendee",
        element: <Attendee />
    }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>,
)
