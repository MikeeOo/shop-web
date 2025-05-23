import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<div className="text-2xl font-semibold">
			{/* <div className="bg-black text-xl text-white"> */}
			<Outlet />
		</div>
	);
}
