import { Outlet } from 'react-router-dom';

import NavBar from '../partials/NavBar';

export default function DefaultLayout() {
	return (
		<div className="h-screen">
			<div className="border-b-2">DefaultLayout</div>
			<NavBar />
			<Outlet />
		</div>
	);
}
