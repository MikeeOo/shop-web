import { Outlet } from 'react-router-dom';
import NavBar from '../partials/NavBar';
import { Button } from '@/components/common/atoms/buttons';

export default function DefaultLayout() {
	return (
		<div className="h-screen">
			<div className="border-b-2">DefaultLayout</div>
			<NavBar />
			{/* <Button.Primary text="Click me" /> */}
			{/* <Button.Secondary text="Click me" /> */}
			<Outlet />
		</div>
	);
}
