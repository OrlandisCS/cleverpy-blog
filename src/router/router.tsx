import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Layout from '../components/layout/layout';
import Login from '../components/Login';
import Conexion from '../components/Conexion';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<App />
			</Layout>
		),
	},
	{
		path: '/conexion',
		element: (
			<Layout>
				<Conexion />
			</Layout>
		),
	},
	{
		path: '/login',
		element: (
			<Layout>
				<Login />
			</Layout>
		),
	},
]);
