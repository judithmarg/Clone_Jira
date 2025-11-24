import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Board } from '../components/board/Board';
import { AppLayout } from '../components/layout/AppLayout';
import { NotFound } from '../components/NotFound';

export const allRoutes = [
    {
        path: '/',
        element: <AppLayout />,
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