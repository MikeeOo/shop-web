import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className="border-b-2 flex gap-120">
			<Link to="/">NavBar</Link>
			<div className="flex gap-10">
				<Link to="/">Home</Link>
				<Link to="/cart">Cart</Link>
				<Link to="/signin">Sign In</Link>
				<Link to="/signup">Sign Up</Link>
				<Link to="/admin">Admin</Link>
			</div>
		</div>
	);
}
