import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

import Attendees from './pages/attendees/index.tsx';
import SpecialMention from './pages/special-mention/index.tsx';
import Attendance from './pages/attendance/index.tsx';

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
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>,
)
