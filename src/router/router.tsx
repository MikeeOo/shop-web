import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import DefaultLayout from '../layouts/DefaultLayout';
import AdminLayout from '../layouts/AdminLayout';
import ErrorLayout from '../layouts/ErrorLayout';

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				element: <DefaultLayout />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: '/cart',
						element: <CartPage />,
					},
					{
						path: '/signin',
						element: <LoginPage />,
					},
					{
						path: '/signup',
						element: <RegisterPage />,
					},
				],
			},
			{
				path: '/admin',
				element: <AdminLayout />,
			},
			{
				path: '*',
				element: <ErrorLayout />,
			},
		],
	},
]);
