import NavBar from '../partials/NavBar';

export default function AdminLayout() {
	return (
		<div className="h-screen">
			<div className="border-b-2">AdminLayout</div>
			<NavBar />
			<div>AdminPage</div>
		</div>
	);
}
