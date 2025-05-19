import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		// <div className="text-2xl font-semibold">
		<div className="text-xl bg-black text-white">
			<Outlet />
		</div>
	);
}
