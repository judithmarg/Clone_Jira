import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Board } from '../components/board/Board';
import { AppLayout } from '../components/layout/AppLayout';
import { NotFound } from '../components/layout/NotFound';
import { ProtectedRoutes } from '../components/layout/ProtectedRoutes';

export const allRoutes = [
    {
        path: '/',
        element: <ProtectedRoutes><AppLayout /> </ProtectedRoutes>,
        children: [
            {
                path: 'board',
                element: <Board />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
];